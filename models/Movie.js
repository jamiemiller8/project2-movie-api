const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const MovieSchema = new Schema ({
    id: Number,
    title: String,
    popularity: Number,
    original_language: String,
    genres: [{
        type: Schema.Types.ObjectId,
        ref: "Genre"
    }],
    release_date: String,
    run_time: Number, 
    revenue: Number,
    tagline: String,
    budget: Number,
    overview: String
});





module.exports = mongoose.model('Movie', MovieSchema);