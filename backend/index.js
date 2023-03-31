//this is backend of project

const express = require('express');
const { connection } = require('./db');
const userRouter = require('./Router/user.router');
const productRoute = require('./Router/product.router');
const { auth } = require('./Middleware/auth.middleware');
require("dotenv").config()

const app = express();


app.use(express.json());
app.use('/user', userRouter)
app.use(auth)
app.use('/product', productRoute)




app.listen(process.env.PORT, async () => {
    await connection
    console.log('Connected to MongoDB')
    console.log('listening')
})