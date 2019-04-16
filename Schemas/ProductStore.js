let mongoose = require('mongoose');
let Product = require('./Product');

//each Product info will be stored here
let productStore = mongoose.Schema({
    
    // product
    product: {

        // name of the product
        name: { type: String, require: true },

        // category of product like mobile, asus, 4GB ram
        category: [{ type: String}],
        
        // count in the cart of user
        inStoreCount: { type: String, default: 0 }, 

        // price of the product
        price:  { type: mongoose.Decimal128, require: true},

        // Discount
        discount: {
            // Boolean value
            onDiscount: {type: Boolean, default: false},

            // discount percentage
            discountPercentage: {type: Number, default: 0}
        }      
    },

    // seller info
    seller: {
        
        // name 
        name: { type: String, require: true },
        
        contact: {
            // email
            email: {type: email, require: true},
        
            // phone 
            phone: {type: Number},
        }
    }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('ProductStore', productStore);