const mongoose = require('mongoose')
const reviewSchema = require('./review')
const clinicSchema = require('./clinic')
const boroughSchema = require('./borough')

const Review = mongoose.model('Review', reviewSchema)
const Clinic = mongoose.model('Park', clinicSchema)
const Borough = mongoose.model('Borough', boroughSchema)

module.exports = {
  Review,
  Clinic,
  Borough
}
