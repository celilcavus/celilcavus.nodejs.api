const express = require('express');
var route = express.Router();

const controller = require('../Controllers/PostController');

route.get('/api/post',controller.getAll);
route.get('/api/post/:id',controller.getById);
route.post('/api/post',controller.post);
route.delete('/api/post/:id',controller.delete);
route.put('/api/post/:id',controller.put);


module.exports = route;