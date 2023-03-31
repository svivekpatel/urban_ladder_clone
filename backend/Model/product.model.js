const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: String,
    img: String,
    price: Number,
    brand: String,
    color: String,
    userID: String
}, {
    versionKey: false
})


const ProductModel = mongoose.model('product', productSchema)

module.exports = ProductModel