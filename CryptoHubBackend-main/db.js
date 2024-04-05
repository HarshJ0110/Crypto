const mongoose = require("mongoose");
const connectToMongodb = () => {
    mongoose.connect("mongodb://127.0.0.1/Crypto", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
module.exports = connectToMongodb;