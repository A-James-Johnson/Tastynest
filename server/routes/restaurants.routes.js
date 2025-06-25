const RestaurantController = require("../controllers/Restaurant.controllers");
const verifyToken=require("../middleware/verifytoken")


module.exports = (app) => {
    app.post("/api/restaurant", RestaurantController.create);
    app.get("/api/restaurants",  verifyToken, RestaurantController.fetch);
    app.put("/api/restaurant/:id", RestaurantController.updateOne);
    app.delete("/api/restaurant/:id", RestaurantController.delete);
    app.get("/api/restaurant/:id", RestaurantController.fetchOne);
}
