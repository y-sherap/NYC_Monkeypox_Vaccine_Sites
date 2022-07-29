const { Router } = require('express');
const reviews = require('../controllers/reviews')
const borough = require('../controllers/borough')
const clinic = require('../controllers/clinics')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/boroughs', borough.getAllBoroughs)
router.get('/borough/:id', borough.getBoroughById)

router.get('/clinics', clinic.getAllClinics)
// router.get('/clinics/:id', clinic.getClinicById)
// router.get('/boroughs/:id', getClinicByBoroughId)
// consider renaming it to borough ID 

router.post('/reviews', reviews.createReview)
router.delete('/reviews/:id', reviews.deleteReview)
router.put('/reviews/:id', reviews.updateReview)
router.get('/reviews', reviews.getAllReviews)


module.exports = router;