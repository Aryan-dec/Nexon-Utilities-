const {
  Client,
  ChatInputCommandInteraction,
  EmbedBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  ButtonBuilder, 
  ButtonStyle
} = require('discord.js')

module.exports = {
  name: "help",
  description: "Shows the functionality of the bot",
  /*
  * @param {Client} client
  * @param {ChatInputCommandInteraction} interaction
  */

  async execute(interaction, client) {
    const {guild} = interaction 
    const Embed = new EmbedBuilder()
    .setAuthor({name: 'Nexon Utilities Help Menu'})
    .setColor("Aqua")
    .setURL('discord.gg')
    .addFields(
      {
        name: `My prefix for ${guild.name} is /`,
        value: '\u200B'
      }, 
      {
        name: `${client.emojis.news} News Board`,
        value: ' ``` Bot Still under development ```'
      },
      {
        name: 'Command Catagories',
        value: 
          `
          > • **Information** - []
          > • **Utility** - []
          > • **Systems** - []
          > • **Moderation** - []
          > • **Admin** - []
          > • **Music** - []
          > • **Games** - []
          `
      },
      {
        name: 'Usefull Links',
        value: `Support • TOS • Shop`
      }
    )
    .setImage('https://media.discordapp.net/attachments/1031013587650609235/1036573916866543656/20221031_150419.jpg')
    .setFooter({text: 'Nexon Development' })

    interaction.reply({embeds: [Embed] })
  }
}