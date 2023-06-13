const express = require('express');
const routesAPI = require('../routes');

const api = express();

// Json
api.use(express.json({limit: "50mb"}));
api.use(
  express.urlencoded({
    extended: true
  })
);

// Routes
routesAPI(api);

module.exports = api;
