import React, { useState } from 'react'
import cookie from "js-cookie"
import { useEffect } from 'react'
import { useLocation,Outlet, useNavigate } from "react-router-dom";
import axios from "axios"
function ProtectedRoutes() {
    const [Access,setAcess]=useState(true)
    const [role,setrole] =useState("")
    useEffect (()=>{
        axios.post("http://localhost:3000/api/auth",{cookie :cookie.get("jwt")},{ withCredentials: true }).then((response)=>{ setAcess(response.data.access);setrole(response.data.payload.role);console.log(role ,"role")} )
     
  
    },[])
    const location = useLocation()
   const Navigate =useNavigate(   )
   
  return (
    Access && role==="admin" ? < Outlet/> : Navigate("/login")
    
    
  )
}

export default ProtectedRoutes