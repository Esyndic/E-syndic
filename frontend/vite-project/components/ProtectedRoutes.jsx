import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation,Outlet, useNavigate } from "react-router-dom";
import axios from "axios"
function ProtectedRoutes() {
    const [Access,setAcess]=useState()
    useEffect (()=>{
        axios.post("http://localhost:3000/api/auth").then((response)=>{ setAcess(response.data.true)})
        console.log("🚀 ~ file: ProtectedRoutes.jsx:9 ~ useEffect ~ response.data:", response.data)
  
    },[])
    const location = useLocation()
   const Navigate =useNavigate()
  return (
    Access ? < Outlet/> : 
    <Navigate to="/login" state={{from:location}} replace/>
  )
}

export default ProtectedRoutes