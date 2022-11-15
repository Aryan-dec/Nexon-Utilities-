const { model, Schema } = require('mongoose')

module.exports = model("suggestSchema", new Schema({
  GuidID: String,
  MessageID: String,
  Details: Array
}))