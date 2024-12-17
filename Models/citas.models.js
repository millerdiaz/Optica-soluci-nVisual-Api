const mongoose = require("mongoose")

const CitasSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    documentoIdentidad: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    sede: {
        type: String,
        required: true,
        enum: ['Sede Centro', 'Sede Teusaquillo', 'Sede Chapinero', 'Sede Norte', 'Sede Sur']
    },
    especialista: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false  
});


module.exports = mongoose.model("Citas", CitasSchema);


