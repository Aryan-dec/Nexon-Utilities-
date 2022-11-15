const { MessageComponentInteraction } = require('discord.js')
const DB = require('../../Structures/Schemas/suggestSchema.js')

module.exports = {
  id: "suggest-decline",
  execute(interaction) {
     if(!interaction.isButton()) return;
     if(!interaction.member.permissions.has("Administrator"))
     return interaction.reply({content: "You cannot use this button", ephemeral: true})

     const { guildId, customId, message} = interaction

     DB.findOne({
       GuidID: guildId,
       MessageID: message.id
     } , async(err, data) => {
       if(err) return console.log(err);
       if(!data) return interaction.reply({content: "No data found", ephermal: true});

       const Embed = message.embeds[0]
       if(!Embed) return

       Embed.fields[2] = {
         mame: "Status",
         value: "Declined",
         inline: true
       }
       interaction.editReply({embeds: [Embed.setColor("Red")]})
      return interaction.reply({content: "Suggestion Declined", ephemeral: true})
    })
  }
}