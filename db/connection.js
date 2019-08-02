const mongoose = require("mongoose");

mongoose
.connect(process.env.DB_URL, {useNewUrlParser: true})
.then(conn => {
    console.log(`connected to mongodb on ${conn.connections[0].name} db`);
})
.catch(err => {
    console.error(err);
});

mongoose.Promise = Promise; 

module.exports = mongoose;