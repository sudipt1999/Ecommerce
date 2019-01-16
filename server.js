const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const { mongoose } = require('./db/connectDb');
const { User } = require('./db/models/user');
const ejs = require('ejs');
const engine = require('ejs-mate');



/* MIDDLEWARE */
/* FOR LOADING STATIC FILES LIKE CSS AND JS */
app.use(express.static(__dirname + '/public'));
/* Morgan middleware to get what user request and what get responded to him */
app.use(morgan('dev'));
/* FOR SENDING DATA FROM  FRONT END IN ONE FORMAT */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
/* TELLING THE EXPRESS THAT WE ARE USING EJS AND WHERE TO FIND IT */
app.engine('ejs', engine);
app.set('views', __dirname + '/views');//BY DEFAULT IT RECOGNIZES VIEWS FOLDER 
app.set('view engine', 'ejs');


const mainRoutes = require('./routes/main.js');
const userRoutes = require('./routes/user.js');
app.use(mainRoutes);
app.use(userRoutes);




/* Variable for storing port because when we will deploy we will get a process.env.PORT */
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`SERVER STARTED AT PORT ${port}`)
})