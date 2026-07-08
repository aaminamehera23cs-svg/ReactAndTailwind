import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  const [name,setName]=useState('');
  

  return (
    

    <div>
      //two children child1 and child2 are offered synchronised input ie input in child1 is also reflected in child2
      //state lifting allows child2 to access state of child1 by lifting state from child1 to parent 
      //state lift allows for creating and maintaining state 
      <Card title='card1' name={name} setName={setName}/>
      <Card title='card2' name={name} setName={setName}/>

      <p>VALUE INSIDE PARENT COMPONENT:{name}</p>
    </div>
  )
}

export default App
