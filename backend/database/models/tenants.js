
const conn = require("../index");

module.exports = {
 
  getAll: function (callback) {
    const sql = "SELECT * FROM `tenants`";
    conn.query(sql, function (error, results) {
      callback(error, results);
    });
  },
 
  getOne: function (callback, id) {
    const sql = "SELECT * FROM `tenants` WHERE id=?";
    conn.query(sql, [id], function (error, results, ) {
      callback(error, results);
    });
  },
  
  add: function (callback, tenantsData) {
    const sql =
      "INSERT INTO tenants (name, password, email) VALUES (?,?,?)";
    conn.query(
      sql,
      [tenantsData.name, tenantsData.password, tenantsData.email],
      function (error, results) {
        callback(error, results);
      }
    );
  },
  delete: function (calback, id) {
    const sql = "DELETE FROM tenants where id=?";
    conn.query(sql, [id], function (error, results) {
<<<<<<< HEAD
      calback(error, results)
=======
      calback(error, results);
>>>>>>> 57729a452e61da65c1f9fa5473e60d4922dc6d0c
    });
  },
  update: function (callback, val, id) {
    const sql =
      "UPDATE tenants SET name=?, password=?, email=?  where id=?";
    conn.query(
      sql,
      [val.name, val.password, val.email, id],
      function (error, results, ) {
        callback(error, results);
      }
    );
  },
};
