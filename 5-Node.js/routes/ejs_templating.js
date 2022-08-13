const router = require("express").Router()

const users = [{
    name: "Joe",
    profile: "Web Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptates!"
}, {
    name: "Shane",
    profile: "Android Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptates!"
}, {
    name: "Brandon",
    profile: "Software Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptates!"
}, {
    name: "Matthiew",
    profile: "Software Tester",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptates!"
}]

router.get("/", (req, res) => {
    res.render("index", { users })
})

module.exports = router