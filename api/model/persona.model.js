const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let PersonaSchema = new Schema({
    nombre : String,
    apellido: Number,
    ciudad : {
        type : Schema.Types.ObjectId,
        ref: "Ciudad"
    }
});

module.exports = mongoose.model("Persona", PersonaSchema, "persona");