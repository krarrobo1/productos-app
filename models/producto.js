const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const esquemaProducto = new Schema({
    nombre: {
        type: String,
        required: [true, 'Se requiere el nombre del producto']
    },
    descripcion: {
        type: String,
        required: [true, 'Se requiere una descripcion del producto']
    },
    precioUnitario: {
        type: Number,
        required: [true, 'Se requiere el precio del producto']
    }
});

module.exports = mongoose.model('Producto', esquemaProducto, 'misproductos');