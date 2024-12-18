const mongoose = require("mongoose")

// const CitasSchema = new mongoose.Schema({
//     nombres: {
//         type: String,
//         required: true
//     },
//     apellidos: {
//         type: String,
//         required: true
//     },
//     documentoIdentidad: {
//         type: Number,
//         required: true
//     },
//     fecha: {
//         type: Date,
//         required: true
//     },
//     sede: {
//         type: String,
//         required: true,
//         enum: ['Sede Centro', 'Sede Teusaquillo', 'Sede Chapinero', 'Sede Norte', 'Sede Sur']
//     },
//     especialista: {
//         type: String,
//         required: true
//     }
// }, {
//     timestamps: true,
//     versionKey: false  
// });

const CitasSchema = new mongoose.Schema({
    departamento: {
        type: String,
        required: true,
        enum: ['Cundinamarca','Antioquia', 'Valle del Cauca']
    },
    ciudad: {
        type: String,
        required: true,
        enum: ['Bogotá','Medellín', 'Calí']
    },
    tienda: {
        type: String,
        required: true,
        enum: ['Chapinero','CC Titan Plaza', 'CC el retiro']
    },
    tipoDeCita: {
        type: String,
        required: true,
        enum: ['Examen de vista','Consulta oftalmológica', 'Citugía láser']
    },
  
    fecha: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false  
});
module.exports = mongoose.model("Citas", CitasSchema);


