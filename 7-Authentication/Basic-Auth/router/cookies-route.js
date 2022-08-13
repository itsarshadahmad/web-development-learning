const router = require("express").Router()

router.get('/', function (req, res) {
    // Send cookie
    res.cookie(`Cookie token name`, `encrypted cookie string Value`);
    // Request cookie
    // res.send(req.cookies)
    // Clear Cookie
    // res.clearCookie()
    res.send("cookie")
})

module.exports = router