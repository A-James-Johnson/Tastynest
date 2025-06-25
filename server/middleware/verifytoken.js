const jwt = require("jsonwebtoken");
const userModels = require("../models/users.models");

const verifytoken = (req, res, next) => {
    console.log("res",req.header)
    console.log("res",req.header.authorization)
    console.log("res",req.header.authorization.spilt(" ")[1])
    if (req.header &&
        req.headers.authorisation &&
        req.headers.authorisation.spilt(" ")[1] === "JWT") {
            jwt.verify(req.headers.authorisation.spilt(" ")[1],"secretKey",
            function(err,verifiedToken){
                if(err){
                    res.status(401).json({message:"token is not verified"})
                }
                userModels.findById(verifiedToken.id)
                .then((user)=>{
                    req.user=user;
                    next();
                }).catch(err=> res.status(500).json({message:"server is not running"}))
            })

    }else{
        res.status(403).json({message:"token not present"})
    }
}


module.exports = verifytoken;

