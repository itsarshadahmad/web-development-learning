const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const helmet = require('helmet');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const cookieSession = require('cookie-session');
const { verify } = require('crypto');

require('dotenv').config();

const PORT = 3000;

// Setting up all dotenv configuration
const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};

// Option require to configure strategy by passing defined values which we setup in google
// server configuration of Oauth in dashboard.
const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

// Executes when google server return user profile data
function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log('Google profile', profile);
  done(null, profile);
}

// Setting up passport strategy, constructing new google strategy
passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

// Save the session to the cookie 
// Saving user data in cookie that will send to user browser
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Read the session from the cookie
// Loading user data from cookie which comes from browser in our server
passport.deserializeUser((id, done) => {
  // User.findById(id).then(user => {
  //   done(null, user);
  // });
  done(null, id);
});

const app = express();

// Security of node.js application from attackers
app.use(helmet());

// Setting up cookie for client. Cookie key is used to keep cookie secure and encrypt it.
app.use(cookieSession({
  name: 'session',
  maxAge: 24 * 60 * 60 * 1000,
  keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
}));

// Middleware which setups passport in node app
app.use(passport.initialize());
// Validates sessions, checking signature and the way session should be
app.use(passport.session());

// Checking whether user authenticated
function checkLoggedIn(req, res, next) {
  console.log('Current user is:', req.user);
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: 'You must log in!',
    });
  }
  next();
}

// Sending request to google servers to authenticate
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['email'],
  }));

// getting data in return after authentication by google servers, also specifing routes to
// handle success and error conditions
app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/',
    session: true,
  }),
  (req, res) => {
    console.log('Google called us back!');
  }
);

// Logout user and Removes req.user and clears any logged in session
app.get('/auth/logout', (req, res) => {
  req.logout();
  return res.redirect('/');
});

// Route require authentication
app.get('/secret', checkLoggedIn, (req, res) => {
  return res.send('Your personal secret value is 42!');
});

// redirect when failed to login
app.get('/failure', (req, res) => {
  return res.send('Failed to log in!');
});

// redirect when authenticated successfully
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Creating and starting server by adding express as middleware, self signed certificate
https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}, app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});