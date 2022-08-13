// cookies and session
const express = require("express")
const helmet = require("helmet")

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(helmet())

// Session
const session = require("express-session")
app.use(session({
    secret: 'Leaning session',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 30000
    }
}))
const sessionRoute = require("./router/session-route")
app.use(sessionRoute)

// https://www.npmjs.com/package/express-session --> Express-Session Docs

// Cookies
// const cookieParser = require("cookie-parser")
// app.use(cookieParser())
// const cookiesRoute = require("./router/cookies-route")
// app.use(cookiesRoute)

// MD5 Authentication
// const md5AuthRoute = require("./router/md5-auth")
// app.use(md5AuthRoute)

// Bcrypt Authentication
// const bcryptAuthRoute = require("./router/bcrypt-auth")
// app.use(bcryptAuthRoute)

app.listen(PORT)