const express = require('express');
const router = express.Router();

const Movies = require('../models/Movie.model');

router.get('/movies', (req, res, next) => {
    // Iteration #2: List the drones
    // ... your code here
    console.log("what is going on?")
    Movies.find()
        .then((data) => {
            res.render('movies.hbs', { data })
        })
        .catch((err) => {
            console.log(err)
        });
});

router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params

    Movies.findById(id)
        .then((data) => {
            res.render('movieDescription.hbs', { data })
        })
        .catch((err) => {
            console.log(err)
        });
})

module.exports = router;