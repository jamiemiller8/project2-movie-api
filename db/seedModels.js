const Genre = require("../models/Genre");
const Movie = require("../models/Movie");

let genres = require("../data.json");
let movies = require("../movie.json").results;

//Create Genres
Genre.find({}).remove(() => {
  Genre.collection
    .insert(genres.genres)
    .then(genres => {
      console.log("Inserting genres");
      console.log(genres);
    })
    .catch(err => {
      console.log(err);
    });
});

// movies[movies.indexOf(movie)].genres = Object.values(genre)[1]

// for each movie genre id =>
// map genre =>
movies.forEach(movie => {
  movie.genre_ids.forEach(id => {
    genres.genres.forEach(genre => {
      if (Object.values(genre)[0] === id) {
        return Object.values(genre)[1];
      }
    });
  });
});

const moviesArray = movies.map(singleMovie => {
  const newMovie = {
    id: singleMovie.id,
    title: singleMovie.title,
    popularity: singleMovie.popularity,
    original_language: singleMovie.original_language,
    genres: singleMovie.genre_ids.map(genreId=>genreId),
    release_date: singleMovie.release_date
  };
  return newMovie;
});

Movie.find({}).remove(() =>
  Movie.collection
    .insert(moviesArray)
    .then(movies => {
      console.log("Inserting movies");
      console.log(movies);
    })
    .catch(err => {
      console.log(err);
    })
);
