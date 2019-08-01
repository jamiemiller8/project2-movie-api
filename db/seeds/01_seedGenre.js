const mongoose = require('../connection');

const Genre = require('../../models/Genre');
const genres = require('../data.json');


Genre.find({}).remove(() => 
    Genre.create(genres).then(res => console.log(res))
);