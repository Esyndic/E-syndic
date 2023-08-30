//Controller related to posts ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const syndic = require("../database/models/syndic");
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken")
const {createToken} =require("./tenants")
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
      else res.json(results) ;
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
  loginSyndic: async function (req, res) {
    try {
      syndic.getoneByEmail(function (err, results) {
        if (err) {
          return res.json("Error fetching user").status(500);
        }
  
        const user = results[0]; // Assuming you expect a single user
  
        if (user) {
          bcrypt.compare(req.body.password, user.password, async function (err, auth) {
            if (err) {
              return res.json("Error comparing passwords").status(500);
            }
  
            if (auth) {
              const token =  createToken(user.idsyndic,"admin")
              res.cookie("jwt",token,{ sameSite: "none",   expires: new Date(Date.now() + 1 * 60 * 60 * 1000)})
              res.status(200).json({ message: "Successfully logged in", user });
            } else {
              res.status(204).json( {message:"Incorrect password"});
            }
          });
        } else {
          res.status(205).json({ message:"User not found"});
        }
      }, req.body.email);
    } catch (error) {
      res.status(500).json("Error processing request");
    }
  }

  
};
