const axios = require('axios');
const fs = require('fs'); 
// const url = "https://api.themoviedb.org/3/movie/550?api_key=91d8f6047bd78cea27290405a4b8fd68"

//Make a request for a user with a given ID
axios.get("API URL")
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