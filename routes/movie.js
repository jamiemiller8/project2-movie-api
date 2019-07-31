const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie");

// get movie
router.get('/', movieController.index);

// get movie by id
router.get('/:id', movieController.getById);

//get movie by title
router.get('/title/:title', movieController.getByTitle);

//get genre of movie by the movie's id
router.get('/:id/genre', movieController.getGenre);

//create a new movie
router.post('/', movieController.createNewMovie);

//update a movie
router.put('/:id', movieController.updateMovie);

//delete a movie
router.delete('/:id', movieController.deleteMovie);

module.exports = router