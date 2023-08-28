//Controller related to posts ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const posts = require("../database/models/syndic");

module.exports = {
 
  //method to get one post by id.
  /*getOnePost: function (req, res) {
    posts.getOne(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.idpost);
  },*/

   //method to fetch all posts from the blog database.
   getSyndic: function (req, res) {
    posts.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  //method to add a post to the database via the respective model function.
  addSyndic: function (req, res) {
    posts.add(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.body);
  },
 /* updatePost: function (res, req) {
    posts.update(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body,
      req.params
    );
  },*/
  /*deletePost: function (req, res) {
    posts.delete(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params);
  },
  */
};
