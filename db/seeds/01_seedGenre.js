const mongoose = require('../connection');

const Genre = require('../../models/Genre');
const Movie = require('../../models/Movie');
const Person = require('../../models/Person');

const genres = require('../data.json');
const movies = require('../movie.json');
const people = require('../person.json');






// Genre.find({}).remove(() => 
//     Genre.create(genres).then(res => console.log(res))
// );

// Movie.find({}).remove(() => 
//     Movie.create(movies).then(res => console.log(res))
// );

// Person.find({}).remove(() => 
//     Person.create(people).then(res => console.log(res))
// );