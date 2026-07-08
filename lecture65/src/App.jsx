import { useState } from 'react'
import LoginBtn from './components/LoginBtn.jsx';
import LogoutBtn from './components/LogoutBtn.jsx';
import './App.css'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  //conditional rendering allows for redering component elements wrt a condition's result 
  //demonstration 1=>if-else conditional rendering 
  /*
  if(isLoggedIn){
      return (
        <LogoutBtn />

      )
  }
  else{
      return (
        <LoginBtn />
      )
  }
      */
  //demonstration 2=>ternary operator
  /*
  return (
    <div>
      {isLoggedIn ? <LogoutBtn />:<LoginBtn />}
    </div>
  ) 
  */
 
 //demonstration 4=>early return
 if(!isLoggedIn){
  return (
    <LoginBtn />
  )
 }
 //demonstration 3=>logical operators
 
 return (
  <div>
    <h1>conditional rendering with logical operators</h1>
    <div>
      {isLoggedIn && <LogoutBtn />}
    </div>
  </div>
 )
  
  
}

export default App
