const axios = require('axios');
const fs = require('fs');

axios.get('https://api.themoviedb.org/4/list/27?page=1&api_key=91d8f6047bd78cea27290405a4b8fd68&size=50')
.then(response => {
    //handle success
    console.log(response.data.results);
    let stringified = JSON.stringify(response.data.results);
    console.log(stringified);
    fs.writeFile('./movie1.json', stringified, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("successfully wrote records to db/movie.json");
        }
    })
})
