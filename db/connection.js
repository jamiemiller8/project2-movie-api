const mongoose = require("mongoose");
mongoose.Promise = Promise; 

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL
} else {
    mongoURI = "mongodb://localhost/project2-movie-api"
}

mongoose.connect(mongoURI, { useNewUrlParser: true})
.then((instance) => {
    console.log(`connected to mongodb on ${instance.connections[0].name} db`);
})
.catch(err => {
    console.error(err);
});

module.exports = mongoose;