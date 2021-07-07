const jwt = require("jsonwebtoken")
const { jwtSecret } = require("./secrets")

module.exports = (req,res,next) => {
    const token = req.headers.authorization
    if (token){
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) res.status(401).json({error: "token modified"})
            else {
                req.user = decodedToken.user
                next()
            }
        })
    } else {
        res.status(401).json({error: "no token"})
    }
}