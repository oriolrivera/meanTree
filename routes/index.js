'use strict'

const express = require('express');

const userCtrl = require('../app/Controllers/Users');

const api = express.Router();

api.post('/user', userCtrl.saveUser);
api.get('/users', userCtrl.getUsers);

module.exports = api
