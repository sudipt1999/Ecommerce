/* WILL BE HANDLING ROUTES RELATED TO USER SIGN IN , SIGN UP */
const router = require('express').Router();
const mongoose = require('../db/connectDb');
const User = require('../db/models/user');
const passport = require('passport');
const passportConfig = require('../config/passport')

router.get('/signup', (req, res) => {
    console.log(req.body);
    res.render('main/signup', {
        error: req.flash('error')
    });
})

router.get('/signin', (req, res) => {
    console.log(req.body);
    /* req.user is obtained due to serialaize and deserialze */
    if (req.user) return res.redirect('/')
    // res.render('main/signin', {
    //     message: req.flash('loginMessage')
    // })
    res.send("successssssssssssssssssssssssss")
})

/* ---------ROUTES FOR HANDLING POST REQUEST-------- */
/*Route for testing data from user */
router.post('/signup', (req, res) => {
    console.log(req.body);
    let user = new User();

    user.profile.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    User.findOne({ email: req.body.email }).then(foundUser => {
        if (foundUser) {
            console.log("already a user with same data");
            req.flash('error', 'Account with email address already exists');
            return res.redirect('/signup');
        }
        else {
            console.log(foundUser);
            user.save().then(savedUser => {
                console.log(savedUser);
                res.send("ADDED USER SUCCESSFULLY");
            }).catch(err => res.send(err));
        }

    }).catch(err => res.send(err));
})


router.post('/signin', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
}))







module.exports = router;