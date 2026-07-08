import React from 'react'
//child component receives props ie regular downflow of info from parent to child
const card = (props) => {
  return (
    <div>
      //onChange upon event e allows for calling function setName where target value is new value to variable name 
      <input type='text' onChange={(e)=>props.setName(e.target.value)}></input>
      <p>Name state variable's value inside {props.title}:{props.name}</p>
    </div>
  )
}

export default card
