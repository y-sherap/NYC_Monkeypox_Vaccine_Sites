const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Clinic = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    hours: { type: String, required: true },
    appt_type: { type: String, required: true },
    borough: { type: Schema.Types.ObjectId, ref: "Borough" }},
  { timestamps: true }
)

module.exports = Clinic