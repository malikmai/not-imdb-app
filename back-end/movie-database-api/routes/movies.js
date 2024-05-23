// Description: This file contains the routes for the movies resource.
// routes/movies.js

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.getMovies);
router.get('/:movieId', movieController.getMovieById);
router.post('/', movieController.createMovie);
router.put('/:movieId', movieController.updateMovie);
router.delete('/:movieId', movieController.deleteMovie);

module.exports = router;