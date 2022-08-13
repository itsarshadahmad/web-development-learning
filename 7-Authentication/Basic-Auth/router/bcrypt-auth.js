const router = require("express").Router()
const bcrypt = require("bcrypt")
const saltRounds = 10;
const users = []

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    if (name && email && password) {
        await bcrypt.hash(password, saltRounds, function (err, hash) {
            users.push({ name, email, password: hash })
            if (err) console.log(err);
            else res.send("User created.")
        });
    } else {
        res.send("Please enter all required fields")
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        const [user] = users.filter(item => item.email === email)
        if (user) {
            await bcrypt.compare(password, user.password, function (err, result) {
                if (err) console.log(err);
                if (result) {
                    res.send("Authenticated")
                } else {
                    res.send("Incorrect credentials.")
                }
            });
        } else {
            res.send("Incorrect credentials.")
        }
    } else {
        res.send("Please enter all required fields")
    }
})

module.exports = router