import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation,Navigate,Outlet } from "react-router-dom";
import axios from "axios"
function ProtectedRoutes() {
    const [Access,setAcess]=useState()
    useEffect (()=>{
        axios.post("http://localhost:3000/api/auth").then((response)=>{ setAcess(response.data)})

    },[])
    const location = useLocation()
    Navigate =Navigate()
  return (
    Access ? < Outlet/> : 
    <Navigate to="/login" state={{from:location}} replace/>
  )
}

export default ProtectedRoutes