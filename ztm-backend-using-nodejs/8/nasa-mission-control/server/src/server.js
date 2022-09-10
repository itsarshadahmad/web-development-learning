const http = require('http');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

// Setting express as http.createServer middleware.
const server = http.createServer(app);

async function startServer() {
  // Loading CSV data when server starts
  await loadPlanetsData();
  
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();

// Application Model:-
// Web Browser <-- HTTP --> Web App (frontend) <-- HTTP --> Node API <-- Kepler_data.csv