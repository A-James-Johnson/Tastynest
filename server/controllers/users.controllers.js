const userModels = require("../models/users.models")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")

exports.register = (req, res) => {

    const { username, email, password } = req.body;

    const newUser = new userModels({
        username, 
        email,
        password: bcrypt.hashSync(password, 10),
    })

    userModels.findOne({ email }).then((data) => {
        if (data) {
            return res.status(400).send({ message: "Email already exists" });
        } else {
             
            newUser.save()
                .then((data) => {
          const token = jwt.sign({ id: data._id }, "secretKey");
            return res.status(200).send({ user:{
                username:data.username,
                email:data.email,
               

            },
            accessToken:token,
            message: "Signed up successfully" });
                    
        }).catch((err) => {
            console.error("Error during user.save():", err);
                    return res.status(500).send({ message: "Error saving user" });
                });

        }
    }).catch((err) => {
        return res.status(500).send({ message: err.message || "Something went wrong" });
    });

}


exports.login = (req, res) => {
    const { email, password } = req.body;

    userModels.findOne({ email }).then((data) => {
        if (!data) {
            return res.status(400).send({ meassage: "User not found" })
        }

        let isValidpassword = bcrypt.compareSync(password, data.password);

        if (!isValidpassword) {
            return res.status(400).send({ message: "Incorrect password" })
        }
        
        let token=jwt.sign({id:data.id},"secretKey");
        res.status(200).send({
            user:{
                id:data.id,
                email:data.email,
                password:data.password,
                username:data.username

            },
            accessToken:token,

         })
    }).catch((err)=>{
        res.status(500).res.send({message:"server is not running"})
    })
} 