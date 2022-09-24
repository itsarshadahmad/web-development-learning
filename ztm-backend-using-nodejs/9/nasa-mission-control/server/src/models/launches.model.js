const launches = new Map();

let latestFlightNumber = 100;

// Upcoming mission lauch data
const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

// It return all launches from Map (return all launches values as array)
function getAllLaunches() {
  return Array.from(launches.values());
}

// It checks weather launch Id (flight number) exists
function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

// Adding new launch in Map
function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ['Zero to Mastery', 'NASA'],
      flightNumber: latestFlightNumber,
    })
  );
}

// Aborting launch by matching flight number as ID
function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
};