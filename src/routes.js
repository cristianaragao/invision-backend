const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/signin', UserController.index);
routes.post('/signup', UserController.create);

module.exports = routes;