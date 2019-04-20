let mongoose = require('mongoose');
let { urlDB } = require('../Config/config');


//creating a connection to Database
mongoose.connect(urlDB, {useNewUrlParser: true}).then(
    ()=>{
        console.log("CONNECTED TO DB");
    },
    (err)=>{
        console.log("ERROR CONNECTING");
});


module.exports = mongoose;