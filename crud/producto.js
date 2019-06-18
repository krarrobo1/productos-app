// require('../config/config');

// const mongoose = require('mongoose');



const Producto = require('../models/producto');
// // Coneccion con MongoDB desplegada en Atlas
// mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true }, (err) => {
//     if (err) throw err
//     console.log('Conectado');
// });

// Recibe un objeto con los atributos: nombre, descripcion y precioUnitario
async function crearProducto(body) {
    let nuevoProducto = new Producto({
        nombre: body.nombre,
        descripcion: body.descripcion,
        precioUnitario: body.precioUnitario
    });
    let producto = await nuevoProducto.save();
    return producto;
}




async function obtenerTodosLosProductos() {
    let productos = await Producto.find({});
    return productos;
}


async function obtenerProductoPorId(id) {
    let producto = await Producto.findById(id);
    return producto;
};

async function editarProducto(id, body) {
    let productoEditado = await Producto.updateOne({ _id: id }, body, { new: true });
    return productoEditado;
}

async function eliminarProducto(id) {
    return await Producto.deleteOne({ _id: id });
}



module.exports = {
    obtenerTodosLosProductos,
    obtenerProductoPorId,
    editarProducto,
    crearProducto,
    eliminarProducto
}