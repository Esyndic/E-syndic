require("dotenv").config()


const jwt = require("jsonwebtoken")
module.exports ={

verifyToken :async (req,res) => {
 if (!req.cookies.jwt){
    res.status(500).json(false)
 }else {
   const token = req.cookies.jwt
    const auth = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,payload)=>{
     if (err) return  res.status(403).json(false,"wrong token")
     if (payload)  return res.status(201).json({true:true,payload:payload})

    })
 } 



} ,
logout : (req,res)=> {
   res.clearCookie("jwt").send("success logout")

}



}