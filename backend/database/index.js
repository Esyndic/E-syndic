const mysql = require('mysql2');




const connection = mysql.createConnection(config);
connection.connect((err)=>{
  if (err) {
    console.log(err);
  }
  else{
    console.log("dataBases connected 😘");
  }
})
module.exports=connection

