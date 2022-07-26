const mongoose  = require('mongoose')
const Schema = mongoose.Schema


const boroughSchema = new Schema (
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = boroughSchema