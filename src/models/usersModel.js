const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: {type: String, require: true},
    email: {type: String, require: true, validate:{
        validator: function(value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Email no válido"
    }},
    password: {type: String, require: true},
    direccion: {type: String, require: true},
    telefono: {type: String, require: true, validate:{
        validator: function(value) {
            return /^\d{10}$/.test(value);
        },
        message: "El número de teléfono debe tener 10 dígitos"
    }},
    fechaRegistro: {type: Date, default: Date.now},
    tipoUsuario: {type: String, require: true},
    metodoPago: {type: String, require: true, enum: ['Tarjeta', 'Paypal','Efectivo']}
});

const User = mongoose.model('Users', userSchema);

module.exports = User;