const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/project2-movie-api", {useNewUrlParser: true});

// mongoose.Promise = Promise; 

module.exports = mongoose;