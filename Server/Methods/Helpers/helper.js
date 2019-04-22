let helper = {}

// for sign In route
helper.signIn = (req, res)=>{
    console.log("SIGN IN METHOD CALLED INSIDE HELPER");
    res.send("SIGN IN ROUTE INSIDE HELPER");
};

// for sign Up route
helper.singUp = (req,res)=>{
    console.log("SIGN UP METHOD INSIDE HELPER");
    res.send("SIGN UP ROUTE INSIDE HELPER");
};

// for testing purpose
helper.testRoute = (req,res)=>{
    console.log("TESTROUTE METHOD INISDE HELPER");
    res.send("TEST ROUTER FOR USER")
}



module.exports = helper;