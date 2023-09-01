import React, { useEffect, useState } from "react";

import cookie from "js-cookie"
import axios from "axios";

function Profile() {
  const [TName,setTName]=useState("")
  const [Id,setId]=useState("")
  useEffect (()=>{
    axios.post("http://localhost:3000/api/auth",{cookie :cookie.get("jwt")},{ withCredentials: true }).then((response)=>{ console.log(response.data); setTName(response.data.payload.name);setId(response.data.payload.id)}).catch((err)=>{console.log(err)})
    
  
  
  },[])
  return (
    <div class="flex min-h-screen items-center justify-center">
      <div class="w-64 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
        <figure class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            class="bi bi-person-fill text-white dark:text-indigo-300"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
          </svg>
        </figure>
        <h2 class="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">
         {TName}
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">id= {Id}</p>
        <div class="flex items-center justify-center">
          <a
            href="#"
            class="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
          >
            Update
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
