const tenants = require("../database/models/tenants");

module.exports = {

  getAllTenants: function (req, res) {
    tenants.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  addTenants: function (req, res) {
    tenants.add(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.body);
  },

  
  // getOneTenants: function (req, res) {
  //   tenants.getOne(function (err, results) {
  //     if (err) res.status(500).send(err);
  //     else res.json(results);
  //   }, req.params.id);
  // },

  
  deleteTenants: function (req, res) {
    tenants.delete(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.id);
  },



  updateTenants: function (req, res) {
    tenants.update(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body,
      req.params.id
    );
  },
};
