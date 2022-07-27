const { Router } = require('express');
const reviews = require('../controllers/reviews')
const borough = require('../controllers/borough')
const clinic = require('../controllers/clinics')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/borough', borough.getAllBoroughs)
router.get('/borough/:id', borough.getBoroughById)

router.get('/clinic', clinic.getAllClinics)
router.get('/clinic/:id', clinic.getClinicById)

router.post('/reviews', reviews.createReview)
router.delete('/reviews/:id', reviews.deleteReview)
router.put('/reviews/:id', reviews.updateReview)
router.get('/reviews', reviews.getAllReviews)


module.exports = router;