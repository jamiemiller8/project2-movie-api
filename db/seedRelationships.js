require('./connection')

const Genre = require('../models/Genre');
const Movie = require('../models/Movie');

Movie.find({})
    .exec((err, movies) => {
        movies.forEach((movie) => {
            console.log(movie.genre_ids)
            movie.save()
        })
    })