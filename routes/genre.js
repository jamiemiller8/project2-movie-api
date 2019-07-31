const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genre");

router.get('/', genreController.index);


module.exports = router;
