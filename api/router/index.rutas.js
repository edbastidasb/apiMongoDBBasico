const express = require("express");

var app = express();

app.use("/api", require("./persona.rutas"));

module.exports = app;