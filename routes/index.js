const { Router } = require('express');
const reviews = require('../controllers/reviews')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

// Home Page - Boroughs

router.post('/reviews', reviews.createReview)


module.exports = router;