const Movie = require('../../models/Movie');
const movies = require('../movie.json');


////definitely not doing this right..get help
Movie.find({id}).remove(() => 
    Movie.create(movies).then(res => console.log(res))
);