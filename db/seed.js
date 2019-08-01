const Genre = require('../models/Genre');
const Movie = require('../models/Movie');
const Person = require('../models/Person');

const genres = require('../data.json');
const movies = require('../movie.json');
const people = require('../person.json');


// Person.deleteMany({}).then(Person.create(people))
// Genre.deleteMany({}).then(Genre.create(genres))

people.results.forEach(result => {
    result.known_for.forEach(known => {
        genres.genres.forEach(genre => {
            if(known.genre_ids.includes(genre.id)){
                Person.find({name: people.name})
    
   
            }})})})




// console.log()
// console.log()

// Genre.find({}).remove (() =>
// Genre.collection.insert(genres)
//     .then(genres => {
//         console.log(genres);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// );

// Person.find({}).remove (() =>
// Person.collection.insert(people)
//     .then(people => {
//         console.log(people);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// );

// const moviesArray = movies.map(singleMovie => {
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
//         console.log(moviesArray);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// );


///need to add a for loop/ for each in order to link the ref in the model 

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