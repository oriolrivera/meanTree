'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const api = require('./Routes');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, origin, authorization, accept, client-security-token, x-requested-with');
  res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);
module.exports = app;
