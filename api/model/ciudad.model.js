const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CiudadSchema = new Schema({
    nombre : String
});

module.exports = mongoose.model("Ciudad", CiudadSchema, "ciudad");