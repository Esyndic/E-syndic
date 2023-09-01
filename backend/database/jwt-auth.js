require("dotenv").config()


const jwt = require("jsonwebtoken")
module.exports ={

verifyToken :async (req,res) => {
 if (!req.body.cookie){
    res.status(203).json({access:false})
 }else {
   const token = req.body.cookie
    const auth = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,payload)=>{
     if (err) return  res.status(403).json(req.body)
     if (payload)  return res.status(201).json({access:true,payload:payload})

    })
 } 



} ,
logout : (req,res)=> {
   res.clearCookie("jwt").send("success logout")

}



}