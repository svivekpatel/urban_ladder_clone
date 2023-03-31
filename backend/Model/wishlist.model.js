const mongoose = require('mongoose');

const wislistSchema = mongoose.Schema({
    productID: String,
    img: String,
    name: String,
    price: Number,
    userID: String
}, {
    versionKey: false
})

const WishlistModel = mongoose.model('wishlist', wislistSchema)
module.exports = WishlistModel