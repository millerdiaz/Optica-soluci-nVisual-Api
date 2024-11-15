const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    }
},{
    versionKey: false
}
)


module.exports = mongoose.model('usuarios', productsModel)

/*
{
"nombre":"jose",
"apellidos": "Quinto Aguilar",
"correo": "jose@gmail.com",
"contraseña": "1234jose"
}
*/