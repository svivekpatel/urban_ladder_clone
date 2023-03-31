
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    const token = req.headers.authorization;
    try {
        if (token) {
            const decode = jwt.verify(token, 'Random');


            req.body.userID = decode.userID;
            // console.log(decode.userID)
            console.log(req.body)

            if (decode) {

                next();
            } else {
                res.status(400).send({ msg: "login failed" })
            }
        } else {
            res.status(400).send({ msg: "Login First" })
        }
    } catch (error) {
        res.send(error.message)
    }
}


module.exports = { auth }