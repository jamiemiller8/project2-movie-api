const Genre = require('../models/Genre');
const Movie = require('../models/Movie');
const Person = require('../models/Person');

const genres = require('../data.json');
const movies = require('../movie.json')[0].results;
const people = require('../person.json');

// let movie = new Movie({id: 1, title: 'Test'})

// movie.save(() => {
//     let genre = new Genre({id: 7, name: 'TestGenre', movies: [movie._id]});
//     genre.save();
// })

// Movie.findOne({title: 'No Country for Old Men'})
//      .populate('genres')
//      .exec((err, movie) =>{
//          console.log(movie)
//      })

// Genre.findOne({name: 'TestGenre'})
//      .populate('movies')
//      .exec((err, genre) => {
//          console.log(genre)
//      })

// Movie.find({}).remove(() => {
//     Genre.find({}).remove(() => {
//         Genre.collection.insert(genres.genres)
//             .then(genres => {
//                 Movie.collection.insertMany(movies).then(movies => {
//                     console.log('movies')
//                     console.log(movies.ops)
//                     Movie.find({}).then(foundMovies => {
//                         foundMovies.forEach(movie => {
//                             console.log('foundMovie')
//                             console.log(movie)
//                             movie.genres = movie.genres.map(genre => {
//                                 return Genre.findOne({id: genre}).exec((err, genre) => genre)
//                             })
//                             movie.save();
//                         })
//                     })
//                     Movie.findOne({title: 'No Country for Old Men'})
//                                     .populate('genres')
//                                     .exec((err, movie) => {
//                                         console.log('movie')
//                                         console.log(movie)
//                                     })
//                     Genre.findOne({name: 'Action'})
//                          .exec((err, genre) => {
//                              console.log(genre)
//                          })
//                     Movie.findOne({title: 'No Country for Old Men'})
//                          .exec((err, movie) => {
//                              console.log(movie)
//                          })
//                 })
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     })
// })


// Genre.findOne({name: 'Action'})
//      .populate('movies')
//      .exec((err, genre) => {
//          console.log('ACTUAL')
//          console.log(genre)
//      })

// const moviesArray = movies[0].results.map(singleMovie => {
//     const newMovie = {}
//     newMovie.id = singleMovie.id,
//     newMovie.title = singleMovie.title,
//     newMovie.popularity = singleMovie.popularity,
//     newMovie.original_language = singleMovie.original_language,
//     newMovie.genres = singleMovie.genres,
//     newMovie.release_date = singleMovie.release_date,
//     newMovie.run_time = singleMovie.run_time,
//     newMovie.revenue = singleMovie.revenue,
//     newMovie.tagline = singleMovie.tagline,
//     newMovie.budget = singleMovie.budget,
//     newMovie.overview = singleMovie.overview
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

// console.log('HEYEYEYEYEY')
// let movie = Movie.findOne({'title': 'No Country for Old Men'}, (err, movie) => movie)
// console.log(movie)

// Person.find({}).remove (() =>
// Person.collection.insert(people)
//     .then(people => {
//         console.log(people);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// );


// Movie.find({}).then(movies => {
//     Genre.find({}).then(genres => {
//         let genreIds = genres.map(list => {
//             return list._id;
//         });
//         for (let i = 0; i < movies.length; i++) {
//             movies[i].genres = genreIds[i];
//             movies[i].save();
//         }
//     });
// });