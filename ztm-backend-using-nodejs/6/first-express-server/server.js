const express = require("express")
const app = express()
const PORT = 3000

const friends = [
    {
        id: 0,
        name: 'Albert Einstein'
    },
    {
        id: 1,
        name: 'Sir Isaac Newton'
    }
];

// Built-in middleware
// json() will allow our application to communicate using json and support json communication.
// you can access client sent json data by req.body.fieldName
app.use(express.json())
// app.use(express.urlencoded())

// Middleware
// It is sets of instruction which executes before server route starts and prepare all
// require code. It could have code like authentication, dependency, etc.
// It can also be put as middleware to be executed in routes. It can nestedly interdependent
// on each other. next() is used to call next middleware. app.use() is place where
// middleware is put.
// mid1 -> mid2 -> middleware(endpoint) -> return mid2 -> return mid1 -> response
// By this way we can also calculate time took to process request
app.use((req, res, next) => {
    const start = Date.now()
    // next is called so express passes it to currect handler (route)
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

// If file name is server.js then npm start will run your server express make sure that.
// Express handles content type itself by watching content type trying to send.
// Express also handle error for us ex if page doesn't found it sends 404 statusCode
app.get("/", (req, res) => {
    // res.send can send data of multiple type and it ends response automatically.
    // res.send({
    //     id: 1,
    //     name: "Sir Isaac Newton"
    // })
    res.json(friends)
})

app.get("/messages", (req, res) => {
    res.send("<h1>Hello Albert!</h1>")
})

app.post("/messages", (req, res) => {
    console.log("Uploading...")
})

// express :/ syntax to access endpoint param
app.get("/friends/:friendID", (req, res) => {
    const friendID = Number(req.params.friendID)
    const friend = friends[friendID]
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        })
    }
})

app.post("/friends", (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            error: "Missing friend name"
        })
    }
    const newFriends = {
        id: friends.length,
        name: req.body.name,
    }
    friends.push(newFriends)
    res.json(newFriends)

})

app.listen(PORT, () => {
    console.log("Server started at http://localhost:3000");
})