const conn = require("../index");
module.exports = {
  getone: function (callback, id) {
    const sql = "SELECT * FROM `factures`  WHERE  `tenants_id` = ? ";
    conn.query(sql, [id], function (error, results, fields) {
      callback(error, results);
    });
  },
  getAll: function (callback) {
    const sql = "SELECT * FROM `factures`  ";
    conn.query(sql, function (error, results, fields) {
      callback(error, results);
    });
  },

  // a function that can be used to insert a personnel into the database
  add: function (callback, val) {
    const sql =
      "INSERT INTO `factures` (date,rent,STEG,SONEDE,Topnet,decription,syndic_idsyndic,tenants_id,tenants_syndic_idsyndic) VALUES (?, ?, ?, ?, ?,?,?,?,?)";
    conn.query(
      sql,
      [
        val.date,
        val.rent,
        val.STEG,
        val.SONEDE,
        val.Topnet,
        val.decription,
        val.syndic_idsyndic,
        val.tenants_id,
        val.tenants_syndic_idsyndic,
      ],
      function (error, results, fields) {
        callback(error, results);
      }
    );
  },

  deleteone: function (callback, id) {
    const sql = "DELETE FROM `factures` WHERE id=?";
    conn.query(sql, [id], function (error, results, fields) {
      callback(error, results);
    });
  },

  update: function (callback, val, id) {
    const sql =
      "UPDATE `factures` SET date=?,rent=?,STEG=?,SONEDE=?,Topnet=?,decription=?  WHERE id=?";
    conn.query(
      sql,
      [
        val.date,
        val.rent,
        val.STEG,
        val.SONEDE,
        val.Topnet,
        val.decription,
        id,
      ],
      function (error, results) {
        callback(error, results);
      }
    );
  },
};
