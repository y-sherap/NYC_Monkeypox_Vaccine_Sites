const { Router } = require('express');
const reviews = require('../controllers/reviews')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/reviews', reviews.createReview)
router.delete('/reviews/:id', reviews.deleteReview)
router.put('/reviews/:id', reviews.updateReview)
router.get('/reviews', reviews.getAllReviews)


module.exports = router;