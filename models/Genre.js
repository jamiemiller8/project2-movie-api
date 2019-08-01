const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const GenreSchema = new Schema ({
    genres:[{
        id: Number,
        name: String
    }]
})


module.exports = mongoose.model('Genre', GenreSchema);