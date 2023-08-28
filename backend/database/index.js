const mysql = require('mysql2');


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

