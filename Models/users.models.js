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
    direccion: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: true
    }
},{
    versionKey: `true`
}
)


module.exports = mongoose.model('users', userModel)

/*
{
"nombre":"jose",
"apellidos": "Quinto Aguilar",
"correo": "jose@gmail.com",
"contrasena": "1234jose",
"direccion": "calle 100 # 9 - 90",
"roll": "administrador"
}
*/