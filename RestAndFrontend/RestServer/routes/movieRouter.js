const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

router.get('/movies', movieController.showMovieList);

router.get('/movies/:movieId', movieController.showMovieDetail);

router.post('/movies/:movieId', movieController.addComment);

module.exports = router;