const mongoose = require("mongoose");

const RestuarantSchema = new mongoose.Schema({
  name: String,
  rate: Number,
  img: String,
  dsc: String,
  price: Number,
  AvgCost: Number,
});


const RestaurantModel= mongoose.model("Restaurants",RestuarantSchema) ;

module.exports=RestaurantModel;

