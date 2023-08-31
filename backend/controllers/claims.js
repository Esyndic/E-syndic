const claims = require("../database/models/claims");
module.exports = {
  getAllClaims: function (req, res) {
    claims.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  addClaims: function (req, res) {
    claims.add(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.body);
  },

  deleteClaims: function (req, res) {
    claims.delete(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.id);
  },
};
