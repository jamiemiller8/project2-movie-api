const mongoose = require('../connection');

const Genre = require('../../models/Genre');
const genres = require('../data.json');

//clears the database and seeds it with new data
Genre.find({}).remove(() => 
    Genre.create(genres).then(res => console.log(res))
);