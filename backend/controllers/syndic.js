//Controller related to posts ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const syndic = require("../database/models/syndic");

module.exports = {

   //method to fetch all posts from the blog database.
   getSyndic: function (req, res) {
    syndic.getSyndic(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json( results );
    });
  },
  //method to add a post to the database via the respective model function.
  addSyndic: function (req, res) {
    syndic.addSyndic(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.body);
  },

 updateSyndic: function (req,res) {
    syndic.updateSyndic(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body,
      req.params.idsyndic
    );
  },

  
};
