const Ciudad = require("./../model/ciudad.model");
const Persona = require("./../model/persona.model");

let index = (req, res) => {
    Persona.find({})
    .populate("ciudad")
    .exec((err, data)=>{
        if(err)
            return res.status(500).json({
                ok: false,
                err
            });

        return res.json(data);
    })
}

let guardar = (req, res) => {

    let body = req.body;

    let persona = new Persona({
        nombre: body.nombre,
        apellido : body.apellido,
        ciudad : body.ciudad
    });

    persona.save((err, persona_nuevo)=>{
        if(err)
            return res.status(500).json({
                ok: false,
                err
            });

        return res.json({
            ok:true,
            persona_nuevo
        });
    });

}

let modificar = (req, res) => {
    let body = req.body;
    let id = req.params.id;

    Persona.findByIdAndUpdate(id, body, {new :true}, (err, persona_modificado) => {
        if(err)
            return res.status(500).json({
                ok: false,
                err
            });

        return res.json({
            ok:true,
            persona_modificado
        });
    })
}

let listar_ciudades = (req, res) =>{
    Ciudad.find({})
    .exec((err, data)=>{
        if(err)
            return res.status(500).json({
                ok: false,
                err
            });

        return res.json(data);
    })
}

module.exports = {
    guardar,
    modificar, 
    index,
    listar_ciudades
}