const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const PersonSchema = new Schema ({
    results:[{
        name: String,
        known_for:[{
            id: Number,
            title: String,
            genre_ids:[{
                type: Number
            }]
        }]
    }]
});


module.exports = mongoose.model('Person', PersonSchema);