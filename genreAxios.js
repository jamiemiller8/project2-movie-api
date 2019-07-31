const axios = require('axios');
const fs = require('fs'); 

//Make a request for a user with a given ID
axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=91d8f6047bd78cea27290405a4b8fd68&language=en-US')
.then(response => {
    //handle success
    console.log(response.data);
    let stringified = JSON.stringify(response.data);
    console.log(stringified);
    fs.writeFile('./data.json', stringified, err => {
        if(err) {
            console.error(err);
        } else {
            console.log("successfully wrote records to db/data.json");
        }
    });
});