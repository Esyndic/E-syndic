// import the database connection
const conn = require("../index");

module.exports = {

  /*
  //a function that retrieves one post record based on the provided id.
  getOne: function (callback, id) {
    const sql = "SELECT * FROM `post` WHERE (id_user=?)";
    conn.query(sql, [id], function (error, results, fields) {
      callback(error, results);
    });
  },
  */ 

   // a function which fetches all the syndic

 
   getSyndic: function (callback) {
    const sql = "SELECT * FROM `syndic`  "

    conn.query(sql, function (error, results) {
      callback(error, results);
    });
  },
  // a function that can be used to insert a syndic into the database
  addSyndic: function (callback, val) {
    const sql = "INSERT INTO syndic (syndicName,email,password) VALUES (?, ?,?)";
    conn.query(
      sql,
      [val.syndicName, val.email,val.password],
      function (error, results) {
        callback(error, results);
      }
    );
  },
  deleteSyndic: function (callback, id) {
    const sql = "DELETE FROM syndic WHERE idsyndic=?";
    conn.query(sql, [id], function (error, results, fields) {
      callback(error, results);
    });
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

