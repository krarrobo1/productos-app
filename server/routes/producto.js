const express = require('express');
const Producto = require('../models/producto');

// Manejador de URL'S
const router = express.Router();


// Crear un nuevo producto

// req hace referencia a la solicitud

// res hace referencia a la respuesta a dicha solicitud
router.post('/producto', (req, res) => {
    let body = req.body; // Cuerpo de la solicitud

    let nuevoProducto = new Producto({
        nombre: body.nombre,
        descripcion: body.descripcion,
        precioUnitario: body.precioUnitario
    });

    nuevoProducto.save((err) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            });
        }
    });
    res.status(200).json({
        ok: true,
        producto: nuevoProducto
    })

});

router.get('/producto', (req, res) => {
    Producto.find({}, (err, productosDB) => {
        if (err) {
            res.status(500).json({
                ok: false,
                productos: productosDB
            });
        }
        res.status(200).json({
            ok: true,
            productos: productosDB
        });
    });
});

router.get('/producto/:id', (req, res) => {
    let id = req.params.id;
    Producto.findById(id, (err, productoDB) => {
        if (err) {
            res.status(500).json({
                ok: false,
                productos: productosDB
            });
        }
        res.status(200).json({
            ok: true,
            productos: productoDB
        });
    });
});

module.exports = router;