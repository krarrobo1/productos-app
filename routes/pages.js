const express = require('express');
const router = express.Router();
const { obtenerTodosLosProductos, obtenerProductoPorId, editarProducto, crearProducto, eliminarProducto } = require('../crud/producto');


router.get('/', async(req, res) => {
    let productos = await obtenerTodosLosProductos();
    res.render('home', { productos });
});

router.get('/producto/:id', async(req, res) => {
    let id = req.params.id;
    let producto = await obtenerProductoPorId(id);
    res.render('update', { producto });
})

router.post('/update/:id', async(req, res) => {
    let id = req.params.id;
    let body = req.body;
    let producto = await editarProducto(id, body);
    console.log('Producto editado satisfactoriamente.', producto);
    res.redirect('/')
});

router.post('/create', async(req, res) => {
    let body = req.body;
    let producto = crearProducto(body);
    console.log('Producto Creado');
    res.redirect('/');
});

router.get('/delete/:id', async(req, res) => {
    try {
        let id = req.params.id;
        let productoEliminado = await eliminarProducto(id);
        console.log('Producto Eliminardo');
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;