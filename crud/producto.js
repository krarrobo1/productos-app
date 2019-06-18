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
    let productos = await Producto.find({}, async(err, productosDB) => {
        if (err) {
            throw err;
        }
        if (!productosDB) throw new Error('No se encontraron productos');
        console.log('Productos recuperados');
    });
    return productos;
}



async function obtenerProductoPorId(id) {
    let producto = await Producto.findById(id, (err, productoDB) => {
        if (err) {
            throw err;
        }
        if (!productoDB) throw new Error('No se encontro producto con esa ID');
        console.log('Productos recuperado');
    });
    return producto;
};

async function editarProducto(id, body) {
    let productoEditado = await Producto.findByIdAndUpdate(id, body, { new: true }, (err, productoDB) => {
        if (err) throw err;
        if (!productoDB) throw new Error('No se encontro producto con ese ID');
    });

    return productoEditado;
}

async function eliminarProducto(id) {
    return await Producto.findByIdAndDelete(id, (err, productoDB) => {
        if (err) throw err;
        if (!productoDB) throw new Error('No se encontro producto con ese ID');
    });
}

//obtenerProductoPorId('5d0828179f9f84116b309569').then(producto => console.log('Mi prod', producto));

//obtenerProductos().then(productos => console.log(productos));

/*
let body = {
    nombre: 'Camiseta Blanca',
    descripcion: 'Es de algodon',
    precioUnitario: 13
}*/


//editarProducto('5d086924b621947bbdc501a8', { nombre: 'Camiseta Azul', precioUnitario: 10 });

//eliminarProducto('5d0828179f9f84116b309569');
//crearProducto(body);

module.exports = {
    obtenerTodosLosProductos,
    obtenerProductoPorId,
    editarProducto,
    crearProducto,
    eliminarProducto
}