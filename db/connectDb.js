var mongoose = require('mongoose');
var secret = require('../config/secret');


mongoose.connect(secret.url, {
    useCreateIndex: true,
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("CONNECTED TO DB");
    }
})

module.exports = { mongoose };