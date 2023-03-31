const express = require('express');
const UserModel = require('../Model/user.model');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



//api routes for registering users  

userRouter.post('/register', async (req, res) => {
    const { Name, email, password } = req.body;
    try {
        const allreadyExist = await UserModel.findOne({ email })
        if (allreadyExist) {
            res.status(400).send({ msg: "User already registered" })
        }
        bcrypt.hash(password, 4, async (err, hash) => {
            if (err) {
                res.status(400).send({ 'msg': err.message })
            } else {
                const user = new UserModel({ Name, email, password: hash });
                await user.save();
                res.status(200).send({ msg: "User Registered successfully" })
            }
        })
    } catch (error) {
        res.send({ error: error.message })
    }

})



// api routes for logged in users

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    res.status(200).send({ msg: "Login successful", token: jwt.sign({ "userID": user._id }, 'Random') })
                } else {
                    res.status(401).send({ msg: "Wrong Credentials" })
                }
            });
        } else {
            res.status(400).send({ msg: 'Please Register first' })
        }
    } catch (error) {
        res.status(400).send({ mag: error.message })
    }
})

module.exports = userRouter