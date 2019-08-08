require('./connection');

const Genre = require('../models/Genre');
const Movie = require('../models/Movie');

let genres = require('../data.json');
let movies = require('../movie.json').results;

// movies[movies.indexOf(movie)].genres = Object.values(genre)[1]

// for each movie genre id =>
// map genre => 
movies.forEach(movie => {
(movie.genre_ids.forEach(id => {
        genres.genres.forEach(genre => {
            if (Object.values(genre)[0]===(id)) {
                Object.values(genre)[1]
            }
        })
    })
)
})

// const moviesArray = movies.map(singleMovie => {
//     const newMovie = {
//         id: singleMovie.id,
//         title: singleMovie.title,
//         popularity: singleMovie.popularity,
//         original_language: singleMovie.original_language,
//         // genres: singleMovie.genre_ids,
//         release_date: singleMovie.release_date,
//         run_time: singleMovie.run_time,
//         revenue: singleMovie.revenue,
//         tagline: singleMovie.tagline,
//         budget: singleMovie.budget,
//         overview: singleMovie.overview
//     }
//     return newMovie
// });

// Movie.find({}).remove(() => 
// Movie.collection.insert(moviesArray)
//     .then(movies => {
//         console.log('Inserting movies')
//         console.log(movies);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// );

// Genre.find({}).remove(() => {
//         Genre.collection.insert(genres.genres)
//             .then(genres => {
//                 console.log('Inserting genres')
//                 console.log(genres)
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })

Movie.find({})
.then(movies => {
    movies.forEach(movie => {
        movie.update({ name: }, { genre: Genre.find({ name: }) })
    });
})