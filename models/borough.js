const mongoose  = require('mongoose')
const Schema = mongoose.Schema


const Borough = new Schema (
  {
    name: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Borough