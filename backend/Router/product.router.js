const express = require('express')
const ProductModel = require('../Model/product.model')
const jwt = require('jsonwebtoken')

const productRoute = express.Router()


//in this route we trying to do CRUD operations on product


//get all product 

productRoute.get('/', async (req, res) => {

    let token = req.headers.authorization;
    const decode = jwt.verify(token, "Random")
    const query = req.query;

    try {
        if (decode) {
            const products = await ProductModel.find();
            res.status(200).send(products)
        }
    } catch (err) {
        res.status(400).send({ msg: err.message });
    }
})

// adding product to MongoDB

productRoute.post('/add', async (req, res) => {


    try {
        const product = new ProductModel(req.body);
        await product.save();
        res.status(200).send({ msg: 'Product added successfully' })
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})


// update product details 

productRoute.patch('/updateproduct/:ID', async (req, res) => {

    const ID = req.params.ID;
    const payload = req.body;

    // const match1 = await ProductModel.findOne({ _id: ID });

    try {
        await ProductModel.findByIdAndUpdate({ _id: ID }, payload);


        res.status(200).send({ msg: "Product Updated Successfully" })

    } catch (error) {
        res.status(400).send({ msg: error.message })
    }


})


//delete product

productRoute.delete('/deleteproduct/:ID', async (req, res) => {

    const ID = req.params.ID;
    try {
        await ProductModel.findByIdAndDelete({ _id: ID });
        res.status(200).send({ msg: "Product Deleted Successfully" })
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})

module.exports = productRoute