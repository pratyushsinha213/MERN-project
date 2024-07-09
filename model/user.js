const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "name": {type: String},
    "password": {type: String}
}, {
    collection: "user"
})

module.exports = mongoose.model("user-schema", userSchema);