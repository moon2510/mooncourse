const jwt = require('jsonwebtoken')

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "mooni2510@abcdef";

const auth = (req, res, next) =>{
    try {
        const token = req.header("Authorization")
        if(!token) return res.status(400).json({msg: "Invalid Authentication"})

        jwt.verify(token, accessTokenSecret, (err, user) =>{
            if(err) return res.status(400).json({msg: "Invalid Authentication"})

            req.user = user
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = auth