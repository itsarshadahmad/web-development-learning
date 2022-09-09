const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

// Browsers blocks any request are from not same origin. Allow origin to only localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
}));
// Morgan is used logs. It's logging library.
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

// It is serving client react page in server using react build version.
// This is great when you are working with one server to serve both client and server.
// /* (express matching) -> Server Apps with client-side routing
// When /launches route hit express doesn't know about any launch route to handle or serve 
// file that's why it throws 404 not found error to handle this situation we use /*.
// To allow express to match routes from our react serving index.html file to provide that 
// route which solves this issue. Because we declared routing of /launch in client side
// react app it handles that when /* allows to match routes from react after index.html loads.
app.get('/*', (req, res) => {
  // res.sendFile(path.join(__dirname, '../public/index.html'));
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Model -> Model always and only work with data to provide processed data in return.
// It deals with CRUD operation on data.

// Controller -> It deals only presenting data which we get from model and to process
// all details so that it could be used to present data to client or views.

module.exports = app;