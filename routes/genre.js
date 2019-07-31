const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genre");

//get list of genres
router.get('/', genreController.index);

//get genre by name
router.get('/:name', genreController.getByName);


module.exports = router;
