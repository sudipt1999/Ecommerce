const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const { mongoose } = require('./db/connectDb');
const { User } = require('./db/models/user');

/* MIDDLEWARE */
/* Morgan middleware to get what user request and what get responded to him */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

/**---------ROUTES--------- */
app.get('/', (req, res) => {
    res.json("HOMEPAGE");
})

/* Variable for storing port because when we will deploy we will get a process.env.PORT */
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`SERVER STARTED AT PORT ${port}`)
})