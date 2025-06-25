const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors=require("cors");

const app = express();
//Built-in  midleware
app.use(bodyparser.json());
app.use(cors());
//Application-Level middleware
app.use(loggedinuser)
const port=5000;
app.listen(port, () => {
  console.log(`Server is runnning on port ${port}`);
});


mongoose.connect(
  "mongodb+srv://James321485:James321485@cluster0.835jjax.mongodb.net/FastyNest?retryWrites=true&w=majority&appName=Cluster0"
)

const db = mongoose.connection;



db.on("error", () => {
  console.log("no connected")
})

db.on("open", () => {
  console.log("connection is successfull")
})


require("./routes/restaurants.routes")(app);
require("./routes/users.routes")(app);



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



app.get("/users", auth, (req, res) => {
  res.json(users)
})


function loggedinuser(req, res, next) {
  console.log("User athentication is started");
  next();
}

//route level middleware
function auth(req, res, next) {
  const isauth = true;

  if (isauth) {
    console.log("user is loggined in")
    res.status(200)
    next();
  }

  else {
    res.status(401)
    throw new ERROR("user is not authentiacted")
  }
  next();
}



function errhandler(err, req, res, next) {

  console.log("res", res);
  console.log("err middleware is used");

  const resstatuscode = res.statusCode ? res.statusCode : 500;

  switch (resstatuscode) {
    case 401: {
      res.send({
        title: "Not authorised",
        message: err.message

      });
      break;
    }
    case 500: {
      res.send({
        title: "server eroor",
        message: err.message
      })
      break;
    }
    default:
      break;

  }

}

app.use(errhandler)
