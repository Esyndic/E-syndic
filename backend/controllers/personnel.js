const { personnel } = require("../database/models");
    


module.exports = {
  //method to fetch all personnel from the blog database.
  getPersonnel: function (req, res) {
    personnel.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  //method to add a personnel to the database via the respective model function.
  addPersonnel: function (req, res) {
    personnel.add(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.body);
  },

  updatePersonnel: function (res, req) {
    personnel.update(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body,
      req.params
    );
  },
  
  deletePersonnel: function (req, res) {
    personnel.delete(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params);
  },
};