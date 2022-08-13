const router = require("express").Router()

router.get("/", (req, res) => {
    res.status(200)
    res.send("This is example of router working")
})

// * Route Chaining
// router.route("/")
//     .get((req, res) => { })
//     .post((req, res) => { })

module.exports = router