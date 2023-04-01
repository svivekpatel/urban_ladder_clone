const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    contact: Number
}, {
    versionKey: false
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel