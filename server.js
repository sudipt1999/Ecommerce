let app = require('express')();
let {port} = require('./Server/Config/config');
let mongoose = require('./Server/Connect/connect'); // Connecting a mongoose
let router = require('./Server/Routes/router');

app.use('/',router);



app.listen(port,()=>{
    console.log(`App Started at Port ${port}`);
})