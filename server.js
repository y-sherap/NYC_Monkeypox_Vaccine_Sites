const express = require('express');
const routes = require('./routes');
const db = require('./db');
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001;



const app = express();

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', routes);

// app.post('/reviews/:id', async (req, res) => {
//   try {
//     const review = await new Review(req.body)
//     await review.save()
//     return res.status(201).json({
//       review
//     })
//   } catch (error) {
//     return res.status(500).json({ error: error.message })
//   }
// })



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))