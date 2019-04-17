let app = require('express')();
let {port} = require('./Server/Config/config')

app.listen(port,()=>{
    console.log(`App Started at Port ${port}`);
})