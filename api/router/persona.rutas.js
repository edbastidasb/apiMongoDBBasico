const express = require("express");
const {index, guardar, modificar, listar_ciudades} = require("./../controller/persona.controller");

const router = express.Router();

router.get("/persona", index);
router.get("/persona/ciudad", listar_ciudades);
router.post("/persona", guardar);
router.put("/persona/:id", modificar);

module.exports = router;