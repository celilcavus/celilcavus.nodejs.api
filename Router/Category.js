const express = require('express');
var route = express.Router();

const controller = require('../Controllers/CategoryController');

route.get('/api/category',controller.getAll);
route.get('/api/category/:id',controller.getById);
route.post('/api/category',controller.post);
route.delete('/api/category/:id',controller.delete);
route.put('/api/category/:id',controller.put);


module.exports = route;