const mysql = require("mysql2");
const config = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "e-syndic",
}
// Create a database connection and export it from this file.
const connection = mysql.createConnection(config);
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("dataBases connected 😘");
  }

})
module.exports=connection

 
