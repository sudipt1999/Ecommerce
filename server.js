const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const engine = require('ejs-mate');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const secret = require('./config/secret');
/* Store session on  mongo db database */
const mongoStore = require('connect-mongo')(session);
/* for login autentication passport */
const passport = require('passport');




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
/* FOR SENDING ERROR MESSAGES */
app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secret.secretKey,
    store: new mongoStore({ url: secret.url, autoreconnect: true })
}));
app.use(flash());
/* Passport middleware */
app.use(passport.initialize());
app.use(passport.session());

/* MIDDLEWARE TO SEND USER OBJECT WITH EVERY RES */
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
})

/* TELLING THE EXPRESS THAT WE ARE USING EJS AND WHERE TO FIND IT */
app.engine('ejs', engine);
app.set('views', __dirname + '/views');//BY DEFAULT IT RECOGNIZES VIEWS FOLDER 
app.set('view engine', 'ejs');


const mainRoutes = require('./routes/main.js');
const userRoutes = require('./routes/user.js');
app.use(mainRoutes);
app.use(userRoutes);




/* Variable for storing port because when we will deploy we will get a process.env.PORT */
app.listen(secret.port, () => {
    console.log(`SERVER STARTED AT PORT ${secret.port}`)
})