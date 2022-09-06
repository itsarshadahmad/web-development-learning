const router = require("express").Router()
const dataStore = require("../dataStrore")

// RESTful API and CRUD operation
router.route("/")
    .get((req, res) => {
        res.send(dataStore)
    })
    .post((req, res) => {
        const { name, id, profile, education } = req.body
        if (name && id && profile && education) {
            dataStore.push({ name, id, profile, education })
            res.redirect("/")
        } else {
            res.status(400).send("Please enter all required fields")
        }
    })
    .patch((req, res) => {
        const { id, profile } = req.body
        if (id && profile) {
            const index = dataStore.findIndex(item => item.id === id)
            if (index !== -1) {
                dataStore[index].profile = profile
                res.redirect("/")
            } else {
                res.status(400).send("User doesn't exist")
            }
        } else {
            res.status(400).send("Please enter all required fields")
        }
    })
    .delete((req, res) => {
        const { id } = req.body
        if (id) {
            const index = dataStore.findIndex(item => (item.id === id))
            if (index !== -1) {
                // splice(index, delete_count)
                dataStore.splice(index, 1)
                res.redirect("/")
            } else {
                res.status(400).send("User doesn't exist")
            }
        } else {
            res.status(400).send("Please enter all required fields")
        }
    })

module.exports = router

// * Guideliness to follow to build RESTful API
// - Accept and respond with JSON
// - Use noun instead of verbs in endpoint paths
// - Name collection with plural noun
// - Nesting resources for hierarchical objects
// - Handle error gracefully and return standard error codes
// - Allow filtering, sorting, and pagination
// - Maintain good security practices
// - Cache data to improve performance
// - Well Compiled Documentation
// - Return error detail in response body
// - Use SSL/TLS and Secure your API


// * CRUD operation methods (http verbs)
// Get --> used to fetch all data
// Post --> used to create new data/dataset
// PUT --> used to update entire dataset
// PATCH --> used to update individual value of dataset
// DELETE --> used to delete dataset