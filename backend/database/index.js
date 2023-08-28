const mysql = require('mysql2');

//importing the config interface which organizes configuration files for different usage purpose, here development and testing.
const config = require('config');

// Create a database connection and export it from this file.
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: '',
  password: "A.m.i.n.e1"
 });
connection.connect((err)=>{
  if (err) {
    console.log(err);
  }
  else{
    console.log("dataBases connected 😘");
  }
})
module.exports=connection
// Connect to the database and make sure to log a message related to the connection state 

