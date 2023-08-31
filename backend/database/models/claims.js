const conn = require("../index");
module.exports = {
  getAll: function (callback) {
    const sql = "SELECT * FROM `claims`";
    conn.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  add: async function (callback, claimsData) {
    const sql =
      "INSERT INTO claims (name,message,num,tenants_id,tenants_syndic_idsyndic,syndic_idsyndic,email) VALUES (?,?,?,?,?,?,?,?)";
    conn.query(
      sql,
      [
        claimsData.name,
        claimsData.message,
        claimsData.num,
        claimsData.tenants_id,
        claimsData.tenants_syndic_idsyndic,
        claimsData.syndic_idsyndic,
        claimsData.email,
      ],

      function (error, results) {
        callback(error, results);
      }
    );
  },
  delete: function (calback, id) {
    const sql = "DELETE FROM claims where id=?";
    conn.query(sql, [id], function (error, results) {
      calback(error, results);
    });
  },
};
