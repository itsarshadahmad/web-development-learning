const { getAllPlanets } = require('../../models/planets.model');

// Sending all planets list
function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};