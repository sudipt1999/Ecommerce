var mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/Ecommerce", {
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