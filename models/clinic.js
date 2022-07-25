const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clinicSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    hours: { type: String, required: true },
    appt_type: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = clinicSchema