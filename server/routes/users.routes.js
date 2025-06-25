const userRoutes = require("../controllers/users.controllers")


module.exports=(app)=>{
    
    app.post("/api/register",userRoutes.register)
    app.post("/api/login",userRoutes.login)
}