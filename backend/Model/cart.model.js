const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    title: String,
    img: String,
    price: Number,
    brand: String,
    userID: String

}, {
    versionKey: false
})

const CartModel = mongoose.model('cart', cartSchema)

module.exports = CartModel