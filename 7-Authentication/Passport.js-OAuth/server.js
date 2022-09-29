const express = require("express")
const passport = require("passport")
const { Strategy } = require("passport-google-oauth20")
const session = require("express-session")

const AUTH_OPTIONS = {
    clientID: "GOOGLE DEVELOPER CONSOLE CLIENT ID",
    clientSecret: "GOOGLE DEVELOPER CONSOLE CLIENT SECRET",
    callbackURL: "http://localhost:3000/auth/google/callback"
}
const app = express()

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
}))

function verifyCallback(accessToken, refreshToken, profile, done) {
    return done(null, profile)
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    done(null, id);
});

app.use(passport.initialize())
app.use(passport.session())

function checkLoggedIn(req, res, next) {
    const isLoggedIn = req.isAuthenticated() && req.user;
    if (!isLoggedIn) {
        return res.status(401).json({
            error: 'You must log in!',
        });
    }
    next();
}

app.get("/", (req, res) => {
    res.render("index")
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        res.redirect('/secret');
    }
);

app.get("/secret", checkLoggedIn, (req, res) => {
    res.send("Authentication bay bay!")
})

app.get("/failed", (req, res) => {
    res.send("Error occur during authentication")
})

app.get('/auth/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
})