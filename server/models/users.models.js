const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "user already exists"],
    },
    password: {
        type: String,

        required: true,
    },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
