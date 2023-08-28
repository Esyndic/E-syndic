// import the database connection
const conn = require("../index");

module.exports = {
  //a function which fetches all the users.
  getAll: function (callback) {
    const sql = "SELECT * FROM `users`";
    conn.query(sql, function (error, results, fields) {
      callback(error, results);
    });
  },
  //a function that retrieves one user record based on the provided id.
  getOne: function (callback, id) {
    const sql = "SELECT * FROM `users` WHERE idusers=?";
    conn.query(sql, [id], function (error, results, fields) {
      callback(error, results);
    });
  },
  // a function that can be used to add a user to the users table.
  add: function (callback, userData) {
    const sql =
      "INSERT INTO users (user_name,user_password,user_mail) VALUES (?,?,?)";
    conn.query(
      sql,
      [userData.user_name, userData.user_password, userData.user_mail],
      function (error, results, fields) {
        callback(error, results);
      }
    );
  },
  delete: function (calback, id) {
    const sql = "DELETE FROM users where idusers=?";
    conn.query(sql, [id], function (error, results, fields) {
      calback(error, results);
    });
  },
  update: function (callback, val, id) {
    const sql =
      "UPDATE users SET user_name=?,user_password=?,user_mail=?  where idusers=?";
    conn.query(
      sql,
      [val.user_name, val.user_password, val.user_mail, id],
      function (error, results, fields) {
        callback(error, results);
      }
    );
  },
};
