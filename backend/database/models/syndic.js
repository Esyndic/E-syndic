// import the database connection
const conn = require("../index");

module.exports = {
  // a function which fetches all the posts
  getAll: function (callback) {
    const sql = "SELECT * FROM `post`";
    conn.query(sql, function (error, results, fields) {
      callback(error, results);
    });
  },
  //a function that retrieves one post record based on the provided id.
  getOne: function (callback, id) {
    const sql = "SELECT * FROM `post` WHERE (id_user=?)";
    conn.query(sql, [id], function (error, results, fields) {
      callback(error, results);
    });
  },
  // a function that can be used to insert a post into the database
  add: function (callback, val) {
    const sql = "INSERT INTO post (post_photo,post_text) VALUES (?, ?)";
    conn.query(
      sql,
      [val.post_photo, val.post_text],
      function (error, results, fields) {
        callback(error, results);
      }
    );
  },
  delete: function (callback, id) {
    const sql = "DELETE FROM post WHERE idpost=?";
    conn.query(sql, [id], function (error, results, fields) {
      callback(error, results);
    });
  },
  update: function (callback, val, id) {
    const sql = "UPDATE post SET post_photo=?,post_text=?  WHERE idpost=?";
    conn.query(
      sql,
      [val.post_photo, val.post_text, id],
      function (error, results, fields) {
        callback(error, results);
      }
    );
  },
};
