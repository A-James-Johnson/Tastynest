const RestaurantModel = require("../models/restaurant.models");


exports.create = (req, res) => {
  const { name, rate, img, dsc, price, AvgCost } = req.body;

  const newRestaurant = new RestaurantModel({
    name,
    rate,
    img,
    dsc,
    price,
    AvgCost
  });

  newRestaurant
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).json({ message: "something went wrong" });
      }
      
      res.send(data);
    })
    .catch((err) => {
      console.error("Database Error:", err);
      res.status(500).json({ message: "server not available" });
    });
};




exports.fetch = (req, res) => {
  RestaurantModel
    .find()
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "server not available" });
    });
};

exports.fetchOne = (req, res) => {
  const _id = req.params.id;
  RestaurantModel
    .findById({ _id: _id })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "server not available" });
    });
};

// exports.updateOne = (req, res) => {
//   const _id = req.params.id;
//   RestaurantModel
//     .findByIdAndUpdate(_id, {name:"kkk" })
//     .then((data) => {
//       if (!data) {
//         res.status(400).json({ message: "Bad Request" });
//       }

//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "server not available" });
//     });
// };

exports.updateOne = (req, res) => {
  const _id = req.params.id;
  const updateData = req.body; // Get dynamic update data from request body

  RestaurantModel
    .findByIdAndUpdate(_id, updateData, { new: true, runValidators: true })
    .then((data) => {
      if (!data) {
        return res.status(400).json({ message: "Bad Request" });
      }

      res.json(data);
    })
    .catch((err) => {
      console.error("Database Error:", err);
      res.status(500).json({ message: "Server not available" });
    });
};


exports.delete = (req, res) => {
  const _id = req.params.id;

  RestaurantModel
    .findByIdAndDelete(_id)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Restaurant Not found" });
      }
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "server not available" });
    });
};
