const axios = require("axios");
const qs = require('querystring');


// Create New User Function
const requestBody = {
    first_name: 'Pam',
    last_name: 'Kelly',
    email: "pam@gmail.com",
    password: '123456',
    password2: '123456'
    // roles: 
}

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

axios.post("/api/register", qs.stringify(requestBody), config)
    .then((results) => {
        console.log("--------Results from Axios call -------------")
        console.log(results)
    }).catch(err =>(console.log(err))

);

