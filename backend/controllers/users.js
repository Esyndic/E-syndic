//Controller related to users ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const users = require("../database/models/users");
module.exports = {
  //method to fetch all users from the blog database.
  getAllUsers: function (req, res) {
    users.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  //method to add a user to the database via the respective model function.
  addUser: function (req, res) {
    users.add(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.body);
  },

  //method to get one user by id.
  getOneUser: function (req, res) {
    users.getOne(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.iduser);
  },

  //method to delete one user by id.
  deleteUser: function (req, res) {
    users.delete(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.iduser);
  },

  //method to update one user by id.

  updateUser: function (req, res) {
    users.update(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body,
      req.params.iduser
    );
  },
};
