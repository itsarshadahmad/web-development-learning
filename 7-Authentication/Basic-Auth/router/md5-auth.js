const router = require("express").Router()
const md5 = require("md5")
const users = []

router.post("/register", (req, res) => {
    const { name, email, password } = req.body
    if (name && email && password) {
        users.push({ name, email, password: md5(password) })
        res.send("User created.")
    } else {
        res.send("Please enter all required fields")
    }
})

router.post("/login", (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        const [user] = users.filter(item => item.email === email)
        if (user && md5(password) === user.password) {
            res.send("Authenticated")
        }
        else {
            res.send("Incorrect credentials.")
        }
    } else {
        res.send("Please enter all required fields")
    }
})

module.exports = router