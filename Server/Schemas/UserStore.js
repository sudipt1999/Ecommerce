let mongoose = require('mongoose');

// define the schema for our user model
let storeSchema = mongoose.Schema({

    //whose store is this
    owner                 :{
        id: {type: String, require: true}
    },

    //what products he have in cart?
    productsInCart        :{
        products    : []
    },

    //amount for the checkout
    payAmount             :mongoose.Decimal128,

    //user previous history
    productBought         :{
        products    : []
    },

    //bought product status
    boughtProduct         :{
        products    : []
    }

});


// create the model for users and expose it to our app
module.exports = mongoose.model('Store', storeSchema);