const {deleteone , getAll,add,update} = require("../database/models/facture");

     

module.exports = {
  //method to fetch all posts from the blog database.
  getFacture: function (req, res) {
   getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  //method to add a post to the database via the respective model function.
  addFacture: function (req, res) {
    add(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.body);
  },

  updateFacture: function (req, res) {
   update(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body,
      req.params.id
    );
  },
  
  deleteFacture: function (req, res) {
    deleteone (function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.id);
  },
};