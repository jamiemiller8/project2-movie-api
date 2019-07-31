const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const GenreSchema = new Schema ({
    id: Number,
    name: String
})


module.exports = mongoose.model('Genre', GenreSchema);