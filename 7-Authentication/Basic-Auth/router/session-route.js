const route = require("express").Router()
const users = []

route.post("/register", (req, res) => {
    const { name, email, password } = req.body
    if (req.session.user) {
        res.send("User Already Authenticated")
    } else {
        if (name && email && password) {
            users.push({ name, email, password })
            req.session.user = email
            req.session.save()
            res.send("User Created")
        } else {
            res.send("Please enter valid credentials")
        }
    }
})

route.post("/login", (req, res) => {
    const { email, password } = req.body
    if (req.session.user) {
        res.send("User Already Authenticated")
    } else {
        if (email && password) {
            const [user] = users.filter(item => item.email === email)
            if (user) {
                if (user.password === password) {
                    req.session.user = email
                    req.session.save()
                    res.send("Authenticated")
                } else {
                    res.send("Please enter valid credentials")
                }
            }
        } else {
            res.send("Please enter valid credentials")
        }
    }
})

route.delete("/logout", (req, res) => {
    req.session.destroy()
    res.send("User Logged Out")
})

module.exports = route