const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/learning")

const MySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    profile: {
        type: String,
        required: true
    }
});

const MyModel = new mongoose.model("User", MySchema)

module.exports = MyModel
