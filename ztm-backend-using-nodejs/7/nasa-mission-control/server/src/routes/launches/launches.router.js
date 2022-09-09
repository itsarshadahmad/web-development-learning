const express = require('express');
const {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

// / in router means root of route. ex- '/launches' root will be '/'. 
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
// Abort launch by flight number
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;