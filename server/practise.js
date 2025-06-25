const express = require("express");
const bodyparser= require("body-parser")
const app = express();

app.use(bodyparser.json())

app.use(loggedinuser);
app.listen("5000", () => {
  console.log("Server is running on port 5000");
});

app.get("/", (req, res) => {
  res.send("helo World");
});

app.get("/api", (req, res) => {
  res.send("api");
});

const users = [
  {
    id: 1,
    name: "James",
    age: 19,
  },
  {
    id: 2,
    name: "James",
    age: 19,
  },
  {
    id: 3,
    name: "James",
    age: 19,
  },
  {
    id: 4,
    name: "James",
    age: 19,
  },
  {
    id: 5,
    name: "James",
    age: 19,
  },
  {
    id: 6,
    name: "James",
    age: 19,
  },
];



app.get("/users",  (req,res)=>{
    res.json(users)
})


function loggedinuser (req,res,next){
    console.log("middleware");
    next();
}



app.get("/users/:id",(req,res)=>{

    const id=parseInt(req.params.id);
    const user=users.find((ele)=>ele.id==id);

    if(!user){
        return  res.status(404).json({message:"Does not find"})
    }


    res.json(user);
})


app.post("/user",(req,res)=>{
     const name=req.body.name;
     const age=req.body.age;

     const user ={

      id:Math.random()*5,
      name:name,
      age:age
     }
     
    
     users.push(user)
   res.json(users)  
})



app.put("/user/:id",(req,res)=>{
    
     const id=parseInt(req.params.id);

     const user=users.find((user)=>user.id==id);

     if(!user){
      res.json({message:"user does not found "})
     }

     const keys=Object.keys(req.body);

     keys.forEach((key) => {
        if(!user[key]){
            res.status(404).res.json({message:"Does not found"})
        }

        user[key]=req.body[key]
       
     });
     res.json(users);
})


app.delete("/user/:id",(req,res)=>{

    const id=req.body.id;

    const user= users.find((ele)=>ele.id==id);

    if(!user){
      res.status(404).json({message:"Does not found"});
      
    }

    const filteruser= users.filter((ele)=>ele.id != id);

    res.json(filteruser)
})