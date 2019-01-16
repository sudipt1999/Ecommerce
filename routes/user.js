/* WILL BE HANDLING ROUTES RELATED TO USER SIGN IN , SIGN UP */
const router = require('express').Router();
const mongoose = require('../db/connectDb');
const User = require('../db/models/user');


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
            res.send("USER EXIST ALREADY");
        }
        console.log(foundUser);
        user.save().then(savedUser => {
            console.log(savedUser);
            res.send("ADDED USER SUCCESSFULLY");
        }).catch(err => res.send(err));
    }).catch(err => res.send(err));
})


module.exports = router;