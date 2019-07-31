const axios = require('axios');
const fs = require('fs');

axios.get('API URL')
.then(response => {
    //handle success
    console.log(response.data);
    let stringified = JSON.stringify(response.data);
    console.log(stringified);
    fs.writeFile('./data/json', stringified, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("successfully wrote records to db/data.json");
        }
    })
})