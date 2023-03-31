const express = require('express');
const WishlistModel = require('../Model/wishlist.model');

const wishListRouter = express.Router();


wishListRouter.get('/', async (req, res) => {
    let token = req.headers.authorization;
    const decode = jwt.verify(token, "Random");

    if (decode) {
        let data = await WishlistModel.find();
        res.status(200).send(data)
    } else {
        res.status(400).send({ msg: "Data not found" })
    }
})

wishListRouter.patch('/add', async (req, res) => {
    const payload = req.body;

    try {
        let data = WishlistModel(payload);
        await data.save();
        res.status(200).send({ msg: "Added to Wishlist" })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }

})


wishListRouter.delete('/deletewishlist/:ID', async (req, res) => {
    let ID = req.params.ID
    try {
        await WishlistModel.findByIdAndDelete({ _id: ID });
        res.status(200).send({ msg: "Deleted from Wishlist" })
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})

