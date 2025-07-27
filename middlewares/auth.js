const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utilis/config');


const auth = {
    isAuthenticated: (req,res,next) => {

        let token = req.headers['authorization'];
        
        //if no token is provided
        if(!token) {
            return res.status(200).json({message: "No token provided"})
        }

        token = token.split(' ')[1];

        //verify the token
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json ({
                    message: "Invalid Token"});
            }

            //if the token is valid, attach the user id to the request object
            req.userId = decoded.id;
            next();
        })

        
    }
}
module.exports = auth;