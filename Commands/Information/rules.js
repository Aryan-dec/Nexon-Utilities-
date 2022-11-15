const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
  ButtonBuilder, 
  ButtonStyle,
  ApplicationCommandOptionType 
} = require('discord.js')

module.exports = {
  name: "rules",
  description: "rules",
  MemberPerms: "Administrator",
  options: [
    {
      name: "channel",
      description: "channel",
      type: ApplicationCommandOptionType.Channel,
      required: "true",
    }
  ],
  
  /*
  * @param {Client} client 
  * @param {ChatInputCommandInteraction} interactio
  */
  async execute(interaction, client) {
    const channel = interaction.options.getChannel("channel")

    const Embed = new EmbedBuilder()
    .setTitle("Welcome to Nexon Development")
    .setDescription(`
    Please read thoroughly and familiarise yourself with the rules before accessing the rest of the server.\n
**1. Be Respective towards all other members in this server.**\n
> Do not send NSFW/+18/discriminatory/sexist/religious/hate-speech, or otherwise offensive or illegal content. Stand for inclusivity towards each and everyone in this server. Topics that are leaned towards Online-Dating are strictly prohibited. Since we want everybody within the community to understand & communicate with each other efficiently, Kindly use English only on all channels within the server. Note that all of this applies to the Voice Channels too.\n
**2. Promotion of Cracked Software, Music or anything else is prohibited.**\n
> All promotions should follow all other guidelines of the community. Promoting any cracked stuff will lead to Direct Ban from the server. Exceptions can be made for brands/content relevant to the Raiden Community and Partners, for this please contact an Admin. Promotions should not be done outside of Promotion related channels.\n
**3. Absolutely no spam messages or anything that looks like spam.**\n
> Typing many short messages in a short period of time is prohibited. Using a lot of emotes in a message is prohibited. Very Long Messages which looks like a wall are also prohibited.\n
**4. Impersonating any  member is not allowed!**\n
> Pretending to be the developer of the **any bot/website** is prohibited.\n
**5. Use the channels only for what they're intended for**\n
> Also check the channel descriptions since there is additional information or rules that you should know about! Using Bot Commands outside of Commands related channels, is prohibited.\n
**6. Do not share pirated/malicious files**\n
> Sharing of cracks, torrents, otherwise illegally obtained or illegal software, personal details, IP grabbers, or any other kind of malicious software or links is/are strictly prohibited and will result in a Immediate Ban. Never download files you don't 100% trust, never click links you don't 100% trust.\n
**7. Always follow Discord ToS and Guildlines**\n
[Discord Terms](https://discord.com/terms)
[Discord Guidelines](https://discord.com/guidelines)\n
**8. Do not ping Admins, Sponsers and Partners**\n
> If you have any concerns, please reach out to the Moderators first, and then the Admins. Pinging Staff for not a valid reason is prohibited, unless it's an emergency.\n
**9. Community Staff Rights**\n
> The Staff reserves the right to change/modify the rules according to situation and regarding action. Anything not listed here may be deemed against the rules by the staff if needed. Not following the rules may result in a warn, mute, kick or ban according to the situation. The server staff has the liberty to make the call they deem fitting if a rule is not followed.\n
**10. Do not do any of the following **\n
> Ask to become staff
> Begging to make a bot/website
> Ask for promotions or roles
> Interrupting staff
> Comment on action taken by staff
> Guiding staff what to do or what not to do
    `)
    .setColor(`#2f3136`)

    channel.send({
      embeds: [Embed]
    })
  }
}