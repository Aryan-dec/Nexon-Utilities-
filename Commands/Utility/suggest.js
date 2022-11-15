const {
  ChatInputCommandInteraction, 
  EmbedBuilder,
  Client,
  ButtonBuilder, 
  ButtonStyle,
  ActionRowBuilder
} = require('discord.js')
const DB = require("../../Structures/Schemas/suggestSchema.js")

module.exports = {
  name: "suggest",
  description: "Give asuggestion",
  options: [
    {
      name: "type",
      description: "Select an option",
      type: 3,
      required: "true",
      choices : [
        {
          name: "Bot Project",
          value: "Bot-Project",
        },
        {
          name: "Website Project",
          value: "Website-Project",
        },
        {
          name: "Discord Related",
          value: "Discord-Related",
        },
        {
          name: "Other",
          value: "Other",
        },
      ]
    },
    {
      name: "suggestion",
      description: "Enter your suggestion",
      type: 3,
      required: "true",
    }
  ],

  /*
   * @param {ChatInputCommandInteraction} interaction 
   * @param {Client} client
   */
  async execute(interaction, client) {
    const { options, guildId, member, user } = interaction 

    const Type = options.getString("type") 
    const Suggestion = options.getString("suggestion") 

    const Embed = new EmbedBuilder() 
    .setColor("Navy")
    .setAuthor({name: user.tag, iconURL: user.displayAvatarURL({dynamic: true})}) 
    .addFields(
      {
        name: "Suggession",
        value: Suggestion,
        inline: false,
      },
      {
        name: "Type",
        value: Type,
        inline: true,
      },
      {
        name: "Status",
        value: "Pending",
        inline: true
      }
    )
    .setTimestamp()

    const Buttons = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
      .setCustomId("suggest-accept")
      .setLabel("Accept") 
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("suggest-decline")
      .setLabel("Decline") 
      .setStyle(ButtonStyle.Danger),
    )
      
  
  try {
     
      const M = interaction.reply({embeds: [Embed], components: [Buttons], fetchReply: true})

      await DB.create({
        GuildID: guildId,
        MessageID: (await M).id,
        Details: [
          {
            MemberID: member.id,
            Type: Type,
            Suggestion: Suggestion
          }
        ]
      })

  } catch(err) {
    console.log(err)
     }
  }
}