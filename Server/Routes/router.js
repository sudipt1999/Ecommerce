let router = require('express').Router();
let t = require('../Methods/Helpers/helper.js');


// signin
router.post('/signin', (req,res)=>{
    console.log("SIGN IN ROUTE");
    return t.signIn(req, res);
});

// signup
router.post('/signup', (req,res)=>{
    console.log("SIGN UP ROUTE");
    res.send("signup route");
});



// add to cart
router.post('/addToCart', (req,res)=>{
    console.log("ADD TO CART");
    res.send("addToCart route");
});


module.exports = router;