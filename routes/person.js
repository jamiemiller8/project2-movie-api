const express = require("express");
const router = express.Router();
const personController = require("../controllers/person");

//get list of people
router.get('/', personController.index);

//get person by name
router.get('/:name', personController.getByName);

//get person by id
router.get('/:id', personController.getById);


module.exports = router