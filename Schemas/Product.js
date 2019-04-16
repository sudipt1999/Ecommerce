
//  define the product schema
let productSchema  = mongoose.Schema({

    // name of the product
    name: { type: String, require: true },

    // category of product like mobile, asus, 4GB ram
    category: [{ type: String}],
    
    // status of the product inCart, shipped, delivered, wishlist
    status: { type: String, require: true },
    
    // count in the cart of user
    inStoreCount: { type: String, default: 0 },
    
    // price for one product
    price:  { type: mongoose.Decimal128, require: true},
    
    // rated by the user
    rating: { type: Number, default: 0},
    
    // commnets made by the user on the product 
    comments: [{ body: String, date: Date }],
    
    // seller id 
    seller: { type: String, require: true}
});

// create the model for product and export it to our app
module.exports = mongoose.model('Product', productSchema);