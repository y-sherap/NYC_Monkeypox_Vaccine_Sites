const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema (
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    wait_time: { type: String, required: true },
    rating: { type: String, required: true },
    clinic: { type: Schema.Types.ObjectId, ref: "Clinic" }},
  { timestamps: true }
)

module.exports = reviewSchema