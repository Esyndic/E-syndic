require("dotenv").config()
const tenants = require("../database/models/tenants");
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken")

const createToken = (id)=>{

  return jwt.sign({id},process.env.ACCESS_TOKEN_SECRET)
}
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
<<<<<<< HEAD
<<<<<<< HEAD
    tenants.getOne(function (err, results) {
=======
    tena/ nts.getOne(function (err, results) {
>>>>>>> 226a49f8008eec434f14e464217f868c047c0416
=======

    tenants.getOne(function (err, results) {

>>>>>>> 5c1c02ef92998bb4f7a6c3b35f874f4cebd99256
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
              const token =  createToken(user.id)
              res.cookie("jwt",token,{httpOnly:true})
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
