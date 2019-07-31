const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const PersonSchema = new Schema ({
    id: Number,
    name: String,
    gender: String,
    birthday: String,
    biography: String
});


module.exports = mongoose.model('Person', PersonSchema);