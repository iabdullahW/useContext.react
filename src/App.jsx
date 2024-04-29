import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./Home"



import { useState,createContext } from "react"
import Profile from "./Profile";
export const AppContext = createContext();


const App = () => {

  const [username,setUserName]=useState("shaheryar");
  
  

  return (
    <>
    <AppContext.Provider value={{username,setUserName}}>
      
      <Router>
  
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Profile" element={<Profile/>}/>

            </Routes>
      </Router>
      </AppContext.Provider>      
    </>
  )
}

export default App