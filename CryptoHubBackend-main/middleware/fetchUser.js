const jwt = require('jsonwebtoken');
const JWT_Secret = "REGDFSH64GERGERGF";

const fetchUser = (req,res,next) => {
    //Get user from jwt token and add id to req object
    const token = req.header("token");
    // console.log(token)
    if(!token){
        res.status(401).json({error: "Please Authenticate using valid token"})
    }
    try{
        const data = jwt.verify(token, JWT_Secret)
        req.user = data.user;
        // console.log(data)
        //Calling next() to call next middelware 
        next();
    }catch{
        res.status(401).json({error: "Please Authenticate using valid token"})
    }
}
module.exports = fetchUser