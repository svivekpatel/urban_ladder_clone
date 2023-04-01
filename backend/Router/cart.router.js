const express = require('express');

const CartModel = require('../Model/cart.model');

const cartRouter = express.Router();


cartRouter.get('/', async (req, res) => {
    let token = req.headers.authorization;
    const decode = jwt.verify(token, "Random");

    if (decode) {
        let data = await CartModel.find();
        res.status(200).send(data)
    } else {
        res.status(400).send({ msg: "Data not found" })
    }
})

cartRouter.post('/addtocart', async (req, res) => {
    const payload = req.body;

    try {
        let data = CartModel(payload);
        await data.save();
        res.status(200).send({ msg: "Added to Cart" })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }

})


cartRouter.delete('/deleteCart/:ID', async (req, res) => {
    let ID = req.params.ID
    try {
        await CartModel.findByIdAndDelete({ _id: ID });
        res.status(200).send({ msg: "Deleted from Cart" })
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})



