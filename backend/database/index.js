<<<<<<< HEAD
<<<<<<< HEAD
const mysql = require('mysql2');




=======
=======

>>>>>>> 917d7a3066af272629e9650e3533e7a1e4c0b1ee
const mysql = require("mysql2");
const config = {
  host: "localhost",
  user: "root",
  password: "123456",
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
})
module.exports=connection

 
