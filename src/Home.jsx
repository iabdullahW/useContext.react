// import React from 'react'

import { useContext } from "react"
import { AppContext } from "./App"

const Home = () => {

const {username}=useContext(AppContext);

  return (
    <div>
      This is Home Page and user is: {username}
    </div>
  )
}

export default Home