// import React from 'react'
import { useContext, useState } from "react"
import { AppContext } from "./App"

const ChangeProfile = () => {
    const {setUserName}=useContext(AppContext);


   const [newUserName,setNewUserName]=useState("");
  return (
    <div>
      <input value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        className="bg-slate-300"
      />
      <button onClick={() => setUserName(newUserName)}>Change Name</button>
    </div>
  )
}

export default ChangeProfile