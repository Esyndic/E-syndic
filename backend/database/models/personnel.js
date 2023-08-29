const conn = require("../index");

module.exports = {
  // a function which fetches all the personnels
  getAll: function (callback) {
    const sql = "SELECT * FROM `personnels`";
    conn.query(sql, function (error, results, fields) {
      callback(error, results);
    });
  },

  // a function that can be used to insert a personnel into the database
  add: function (callback, val) {
    const sql = "INSERT INTO personnels (name,num,email,role,image,syndic_idsyndic) VALUES (?, ?, ?, ?, ?, ?)";
    conn.query(
      sql,
      [val.name, val.num, val.email, val.role, val.image,val.syndic_idsyndic],
      function (error, results, fields) {
        callback(error, results);
      }
    );
  },

  delete: function (callback, id) {
    const sql = "DELETE FROM personnels WHERE idpersonnel=?";
    conn.query(sql, [id], function (error, results, fields) {
      callback(error, results);
    });
  },

  update: function (callback, val, id) {
    const sql = "UPDATE personnels SET name=?,num=?,email=?,role=?,image=?  WHERE idpersonnel=?";
    conn.query(
      sql,
      [val.name, val.num, val.email, val.role, val.image, id],
      function (error, results, fields) {
        callback(error, results);
      }
    );
  },
};
