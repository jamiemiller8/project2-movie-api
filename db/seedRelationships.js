require('./connection')

const Genre = require('../models/Genre');
const Movie = require('../models/Movie');

Movie.find({})
    .then((movies, err) => {
        movies.forEach((movie) => {
            console.log(movie.genres)
            movie.save()
        })
        if (err) console.error(err)
    })

    // 