const mongoose = require('mongoose')

const Mobileschema = new mongoose.Schema(
    {
        brand: String,
        model: String,
        year: Number,
        price: Number,
        features: [String],
        image: String
    }
)

const Mobilemodel = mongoose.model("mobile", Mobileschema);
module.exports = Mobilemodel