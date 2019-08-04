require('./connection');

const Genre = require('../models/Genre');
const Movie = require('../models/Movie');

const genres = require('../data.json');
const movies = require('../movie.json')[0].results;

const moviesArray = movies.map(singleMovie => {
    const newMovie = {}
    newMovie.id = singleMovie.id,
    newMovie.title = singleMovie.title,
    newMovie.popularity = singleMovie.popularity,
    newMovie.original_language = singleMovie.original_language,
    newMovie.genres = singleMovie.genres,
    newMovie.release_date = singleMovie.release_date,
    newMovie.run_time = singleMovie.run_time,
    newMovie.revenue = singleMovie.revenue,
    newMovie.tagline = singleMovie.tagline,
    newMovie.budget = singleMovie.budget,
    newMovie.overview = singleMovie.overview
    return newMovie
});

Movie.find({}).remove(() => 
Movie.collection.insert(moviesArray)
    .then(movies => {
        console.log('Inserting movies')
        console.log(movies);
    })
    .catch(err => {
        console.log(err);
    })
);

Genre.find({}).remove(() => {
        Genre.collection.insert(genres.genres)
            .then(genres => {
                console.log('Inserting genres')
                console.log(genres)
            .catch(err => {
                console.log(err);
            })
    })
})