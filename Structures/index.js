const { Client, Partials, Collection } = require("discord.js")
const ms = require("ms")
const { promisify } = require("util")
const { glob } = require("glob")
const PG = promisify(glob)
const Ascii = require("ascii-table")

require("dotenv").config()
const { Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent } = Partials

const client = new Client({
    intents: 131071,
    partials: [Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent],
    allowedMentions: { parse: ["everyone", "users", "roles"] },
    rest: { timeout: ms("1m") }
})

client.commands = new Collection()
client.buttons = new Collection()
client.subCommands = new Collection()
client.emojis = require("../emojis.json")

// require('../Systems/Giveaways.js')(client);

const Handlers = ["Events", "Errors", "Commands", "Buttons"]
Handlers.forEach(handler => {
    require(`./Handlers/${handler}`)(client, PG, Ascii)
})

module.exports = client

client.login(process.env.DISCORD_TOKEN)