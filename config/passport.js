const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
/* LS is a just for local login */
const User = require('../db/models/user');


/* 3 steps */

/* SERIALIZE AND DESERIALIZE USER OBJECT */
/* Serialize = what data to be stored in mongo store currently only id */
passport.serializeUser((user, done) => {
    console.log("SERIALIZE FUNCTION CALLED");
    done(null, user._id);
})


/*  you provide what we serialize here id so whole object will be reterieved  */
passport.deserializeUser((id, done) => {
    console.log("DESERIALIZE FUNTION CALLEd")
    User.findById(id, (err, user) => {
        done(err, user);
    })
})



/* MIDDLEWARE */
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    console.log("PASSWORD MIDDLEWARE")
    console.log(req.body);
    User.findOne({ email: email }).then(user => {
        console.log("inside findOne()")
        console.log(user)
        if (!user) {
            return done(null, false, req.flash('loginMessage', 'No user has been found'))
        }
        if (!user.comparePassword(password)) {
            console.log("inside compare check in passport")
            return done(null, false, req.flash('loginMessage', 'Oops! either wrong username or wrong password'))
        }
        return done(null, user);
    }).catch(err => {
        console.log("that is password didnt match");
        console.log(err);
    })
}))


/* CUSTOM FUNCTION TO VALIDATE */
exports.isAuthenticated = (req, res, done) => {
    console.log("IS AUTHENTICATED FUNCTION CALLED");
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/signin')

}
