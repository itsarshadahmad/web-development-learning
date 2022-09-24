const express = require('express');

const {
  httpGetAllPlanets,
} = require('./planets.controller');

const planetsRouter = express.Router();

// Sending all planets to client
planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;