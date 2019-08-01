const Movie = require("../models/Movie");

module.exports = {
    index: function(req, res) {
        Movie.find({}).then(movie => res.json(movie));
    },
    getById: function(req, res) {
        Movie.findById(req.params.id).then(movie => res.json(movie));
    },
    getByTitle: function(req, res) {
        Movie.findOne({title: req.params.title}).then(movie => res.json(movie));
    },
    getGenre: function(req, res) {
        Movie.findOne({ genre: req.params.id}).then(movie => res.json(movie));
    },
    createNewMovie: function(req, res) {
        Movie.create(req.body).then(movie => res.json(movie));
    },
    updateMovie: function(res, res) {
        Movie.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        }).then(movie => res.json(movie));
    },
    deleteMovie: function(req ,res) {
        Movie.findByIdAndRemove(req.params.id).then(movie => res.json(movie));
    }
};