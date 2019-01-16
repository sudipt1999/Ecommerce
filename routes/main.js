/* WILL BE HANDLING ALL THE ROUTES RELATED TO SERVE */

const router = require('express').Router();

/**---------ROUTES FOR HANDLING GET REQUEST------ */
router.get('/', (req, res) => {
    res.render('main/home');
})

router.get('/about', (req, res) => {
    res.render('main/about');
})


module.exports = router;