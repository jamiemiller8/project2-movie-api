const axios = require('axios');
const fs = require('fs');

axios.get('https://api.themoviedb.org/3/person/popular?api_key=91d8f6047bd78cea27290405a4b8fd68&language=en-US&page=1')
.then(response => {
    //handle success
    console.log(response.data);
    let stringified = JSON.stringify(response.data);
    console.log(stringified);
    fs.writeFile('./person.json', stringified, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("successfully wrote records to db/person.json")
        }
    })
})