require("dotenv").config()
const tenants = require("../database/models/tenants");
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken")
const createToken = (id,role) => {

  return jwt.sign({id,role},process.env.ACCESS_TOKEN_SECRET)
}
module.exports = {  
  createToken : createToken ,
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

  

 
  // loginTenants: async function (req, res) {
  //   const user=[]
  //    tenants.getoneByEmail(function (err, results) {
      
  //    user = results
      
  //   }, req.body.email)
    
  //   if (user){
  //     const auth =await bcrypt.compare(req.body.password,user.password)
  //    if (auth){
  //     res.status(200).json("successfuly logged in" ,user)
  //    }


  getOneTenants: function (req, res) {

    tenants.getOne(function (err, results) {

      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.id);
  },



  //   }else{
  //     res.json("incorrect user").status(205)
  //   }
    
    
    
  //   ;}
  loginTenants: async function (req, res) {
    try {
      tenants.getoneByEmail(function (err, results) {
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
              const token =  createToken(user.id,"tenant")
              res.cookie("jwt",token)
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
  },
  
  
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
