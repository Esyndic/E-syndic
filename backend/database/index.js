<<<<<<< HEAD
const mysql = require('mysql2');




=======
const mysql = require("mysql2");
const config = {
  host: "localhost",
  user: "root",
  password: "14326530",
  database: "mydb",
}
// Create a database connection and export it from this file.
>>>>>>> 57729a452e61da65c1f9fa5473e60d4922dc6d0c
const connection = mysql.createConnection(config);
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("dataBases connected 😘");
  }
});
module.exports = connection;
