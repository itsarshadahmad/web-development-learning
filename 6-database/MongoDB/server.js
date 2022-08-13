const express = require("express")
const app = express()
const PORT = 3000
const db = require("./database")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// * Reading all database data
app.get("/", async function (req, res) {
    const data = await db.find({}).exec()
    res.send(data)
})

// * Creating new data inside database
app.post("/", async (req, res) => {
    const { name, age, profile } = req.body
    const user = await new db({ name, age, profile })
    user.save()
    res.redirect("/")
})

// * Updating existing data from database
app.patch("/", async (req, res) => {
    const { name, profile, age } = req.body
    try {
        if (name && profile && age) {
            await db.updateOne({ name, age }, { profile })
            res.redirect("/")
        }
    } catch (error) {
        console.log(error);
    }

})

// * Deleting existing data from database
app.delete("/", async (req, res) => {
    const { name } = req.body
    await db.deleteOne({ name });
    res.redirect("/")
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})

// * CLI commands for MongoDB
// ? Start
// mongod --> To start mongoDB server
// mongo --> To start mongoDB shell/CLI

// ? Create | Show
// use database_name --> to create database
// show dbs --> to show database
// db --> to show current database
// show collections --> to show all collections in current database

// ? Insert (C)
// db.collection_name.insertOne({key:val,...}) --> Insert one value in key - value format.

// ? Read (R)
// db.collection_name.find() --> Query/show all document from databse.collection_name
// db.collection_name.find({query},{filters(optional)}) --> This filters and query exact matching data to you queried for.

// ? Update (U)
// db.collection_name.updateOne({query},{change_task{change_data}}) --> It could update data defined in query
// db.collection_name.updateMany(query_and_changes) --> It can update multiple data defined in query
// db.collection_name.replaceOne({query},{value}) --> It is used to replace entire filtered data

// ? Delete (D)
// db.collections.deleteOne({query}) --> It deletes one query item
// db.collections.deleteMany({query}) --> It deletes all query item matched

// ? Delete database and collection
// db.collection_name.drop() --> Drops collection of current database from server
// db.dropDatabase() --> Drops current database from server

// ? Additional commands
// it (iterator) --> It iterates through cursor and prints all item from selected collection
// db.zips.find({}).pretty() --> It prettify response and make it readable indented manner 