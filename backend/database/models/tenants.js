
const conn = require("../index");
const bcrypt = require("bcrypt")
module.exports = {

  getAll: function (callback) {
    const sql = "SELECT * FROM `tenants`";
    conn.query(sql, function (error, results) {
      callback(error, results);
    });
  },
  getoneByEmail: function (callback, email) {
    const sql = "SELECT * FROM `tenants` WHERE email=?";
    conn.query(sql, [email], function (error, results,) {
      callback(error, results);
    });
  },



  // getOne: function (callback, id) {
  //   const sql = "SELECT * FROM `tenants` ";
  //   conn.query(sql, function (error, results,) {
  //     callback(error, results);
  //   });
  // },

  getOne: function (callback, id) {
    const sql = "SELECT * FROM `tenants` WHERE id=?";
    conn.query(sql, [id], function (error, results, ) {
      callback(error, results);
    });
  },


  add: async function (callback, tenantsData) {
    const salt = await bcrypt.genSalt(10);
    var hashedpassowrd = await bcrypt.hash(tenantsData.password, salt)
    const sql =
      "INSERT INTO tenants (name, password, email,image,syndic_idsyndic) VALUES (?,?,?,?,?)";
    conn.query(
      sql,
      [tenantsData.name, hashedpassowrd, tenantsData.email, tenantsData.image, tenantsData.syndic_idsyndic],
      function (error, results) {
        callback(error, results);
      }
    );
  },
  delete: function (calback, id) {
    const sql = "DELETE FROM tenants where id=?";
    conn.query(sql, [id], function (error, results) {
      calback(error, results);
    });
  },
  update: function (callback, val, id) {
    const sql =
      "UPDATE tenants SET name=?, password=?, email=?  where id=?";
    conn.query(
      sql,
      [val.name, val.password, val.email, id],
      function (error, results,) {
        callback(error, results);
      }
    );
  },
};
