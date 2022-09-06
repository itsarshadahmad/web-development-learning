#!/usr/bin/node
// First line is 'shebang'

// * Vanilla Node.js ---- Basic server and routes
// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// Creating server
// const server = http.createServer((req, res) => {
//     // Header and status code
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     // Routes
//     if (req.url === "/") {
//         res.end("Hello World.")
//     } else if (req.url === "/about") {
//         res.end("This is about section.")
//     } else if (req.url === "/contact") {
//         res.end("This is contact route.")
//     } else {
//         res.end("404 Route Doesn't Exist")
//     }
// })

// Listening server
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })

// * Express JS ---- Basic server and routes
// const express = require("express")
// const app = express()
// const PORT = 3000

// // Middleware Setup
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// // server routes
// app.get("/", (req, res) => {
//     // Sending html file from server
//     res.sendFile(__dirname + "/index.html")
// })

// app.get("/about", (req, res) => {
//     res.send("This is home route")
// })

// app.get("/:param", (req, res) => {
//     // Respoding on custom url parameters
//     if (req.params) {
//         res.status(404)
//         res.setHeader('Content-Type', 'text/plain')
//         res.send("404! This page doesn't exist.")
//     }
// })

// // Listening server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`)
// })

// * Creating file and writing on them
// const fs = require("fs")
// const content = "This is my application of node.js"
// fs.writeFileSync(__dirname + "/test.txt", content)

// * Reading file data on console
// const data = fs.readFileSync(__dirname + "/test.txt", "utf-8")
// console.log(data);

// * Fetches data from API
// const express = require("express")
// const app = express()
// const https = require("https")
// const axios = require("axios")
// CJS way to import
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// MJS - ES6 way to import
// import fetch from "node-fetch"

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// * Default way to get data from API
// app.get("/", async (req, res) => {
//     let apiData = []
//     await https.get("https://jsonplaceholder.typicode.com/todos/", (response) => {
//         response.on("data", (data) => {
//             apiData += data
//         })
//         response.on("end", () => {
//             console.log(JSON.parse(apiData))
//             res.send(JSON.parse(apiData))
//         })
//         response.on("error", (err) => {
//             console.error(err)
//         })
//     })
// })

// * Axios --> to fetch data from API (It works with both browser and node server. size=446kb)
// app.get("/", async (req, res) => {
//     await axios.get("https://jsonplaceholder.typicode.com/todos/")
//         .then(function (response) {
//             // handle success
//             res.send(response.data)
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//         .then(function () {
//             // always executed
//         });
// })

// * Node-Fetch --> to fetch data from API (It is lighter than axios, works only on node.js. size=107kb)
// app.get("/", async (req, res) => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     const data = await response.json();
//     res.send(data)
// })

// app.listen(3000, () => {
//     console.log(`Server started at http://localhost:3000`);
// })

// * static files
// const express = require("express")
// const app = express()
// const path = require("path")

// // express static file --> it can have css, js, images, etc files which you may link to your html page
// app.use(express.static("public"))

// app.get("/", (req, res) => {
//     // Send file from server and 
//     res.sendFile(path.join(__dirname + "/index.html"))
// })

// app.listen("3000", () => {
//     console.log(`Server started at http://localhost:3000`);
// })

// * Router and Routes
// const express = require("express")
// const app = express()
// const PORT = 3000

// * caching all API data
// const apicache = require("apicache")
// let cache = apicache.middleware
// router.use(cache('5 minutes'))

// * Supporting static files (js, css, images, etc)
// app.use(express.static("public"))
// * To work with json data (json compatibility)
// app.use(express.json())
// * Support data through body (urlencoded) part of http request
// app.use(express.urlencoded({ extended: true }))

// * Routes
// const learningRoutes = require("./routes/learning-routes")
// app.use(learningRoutes)

// * EJS Templating engine
// app.set("view engine", "ejs")
// const ejs_templating = require("./routes/ejs_templating")
// app.use(ejs_templating)

// * RESTful API & CRUD Operation
// const restfulAPI = require("./routes/restful-api")
// app.use(restfulAPI)

// app.get("/:id", (req, res) => {
    // * Path Parameters --> These are part of the request URL, which are accessed using the placeholders preceded by ':'. ex:- /customer/:id
    // res.send(req.params)
// })

// app.get("/?:id", (req, res) => {
    // id=req.query.id
    // * Query Parameter --> These are appended to the end of the request URL, Query parameters are appended to the end of the request URL, following '?' and listed in key-value pairs, separated by '&'. ex:- ?id=1&type=new 
    // res.send(req.query)
// })

// * Environment Variable (.env)
// require("dotenv").config()
// console.log(process.env.learning);

// app.listen(PORT, () => {
//     console.log(`Server started at http://localhost:${PORT}`);
// })

// * .mjs and .cjs
// .mjs gives js file es6 syntax and in package.json file if you add "type":"module" then you can achieve samething with .js
// .cjs is for prior to es6 syntax or is default in node.js