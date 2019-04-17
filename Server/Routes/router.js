let router = require('express').Router();


// signin
router.post('/signin', (req,res)=>{
    res.send("signin route");
});

// signup
router.post('/signup', (req,res)=>{
    res.send("signup route");
});



// add to cart
router.post('/addToCart', (req,res)=>{
    res.send("addToCart route");
});


module.exports = router;