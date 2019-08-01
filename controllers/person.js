const Person = require("../models/Person");

module.exports = {
    index: function(req, res) {
        Person.find({}).then(person => res.json(person));
    },
    getByName: function(req, res) {
        Person.findOne({name: req.params.name}).then(person => res.json(person));
    },
    getById: function(req, res) {
        Person.findById(req.params.id).then(person => res.json(person));
    }
};