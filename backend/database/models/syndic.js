// import the database connection
const conn = require("../index");
const bcrypt = require("bcrypt")
module.exports = {


  getoneByEmail : function (callback, email) { 
    const sql = "SELECT * FROM `syndic` WHERE email=?";
    conn.query(sql, [email], function (error, results, ) {
      callback(error, results);
    });
  },

 
   getSyndic: function (callback) {
    const sql = "SELECT * FROM `syndic`  "

    conn.query(sql, function (error, results) {
      callback(error, results);
    });
  },
  // a function that can be used to insert a syndic into the database
  addSyndic: async function (callback, val) {

    const salt = await bcrypt.genSalt(10) ;
    var  hashedpassowrd = await bcrypt.hash(val.password,salt)
    const sql = "INSERT INTO syndic (syndicName,email,password) VALUES (?, ?,?)";
    conn.query(
      sql,
      [val.syndicName, val.email,hashedpassowrd],
      function (error, results) {
        callback(error, results);
      }
    );
  },

  updateSyndic: function (callback, val, id) {
    const sql = "UPDATE syndic SET syndicName=?,email=?,password=? WHERE idsyndic=?";
    conn.query(
      sql,
      [val.syndicName, val.email, val.password, id],
      function (error, results, fields) {
        callback(error, results);
      }
    );
  }
};

