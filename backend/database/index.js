const mysql = require("mysql2");
const config = {
  host: "localhost",
  user: "root",
<<<<<<< HEAD
  password: "A.m.i.n.e1",
=======
  password: "root",
>>>>>>> aed8ab18a42d4c197d71ffc203941efc89706be5
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

 
