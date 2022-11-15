const {model, Schema} = require('mongoose')

module.exports = model('filter', new Schema({
  GuildId: String,
  Log: String,
  Words: [String]
}))