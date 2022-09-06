// MySQL2
// const mysql = require('mysql2');
// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'test',
//     password: "123456"
// });

// Establishing connection
// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });

// * Creating table
// connection.query("CREATE TABLE Users (Name varchar(255), Age int, Profession varchar(255))", (error, results, fields) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(results);
//     }
// })

// * Inserting data in table
// connection.query("INSERT INTO Users (Name, Age, Profession) VALUES ('John', 42, 'SDE')", (error, results) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(results);
//     }
// })
// ---- OR ----
// connection.query("INSERT INTO Users VALUES ('Andriew', 35, 'SDE-III')", (error, results) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(results);
//     }
// })

// * Selecting or Accessing data from table
// connection.query("SELECT * FROM USERS", (error, results) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(results);
//     }
// })

// * Updating data from table
// connection.query("UPDATE users SET Profession='SDE-IV' WHERE name='John'", (error, results) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(results);
//     }
// })

// * Deleting data from table
// connection.query("DELETE FROM users WHERE name='John'", (error, results) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(results);
//     }
// })

// connection.end();