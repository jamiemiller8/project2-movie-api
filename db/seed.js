const mongoose = require('../connection');

const Genre = require('../../models/Genre');
const genres = require('../data.json');

const Person = require('../../models/Person');
const people = require('../person.json');

const Movie = require('../../models/Movie');
const movies = require('../movie.json');


Genre.find({}).remove(() => 
    Genre.create(genres).then(res => console.log(res))
);


////definitely not doing this right..get help
Movie.find({id}).remove(() => 
    Movie.create(movies).then(res => console.log(res))
);