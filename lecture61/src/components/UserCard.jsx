import React from 'react'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src='https://th.bing.com/th/id/OIP.3_JjYQm7IedyFSSJPAcnFAAAAA?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' alt='Aamina-Meher-A'></img>
        <p id='user-desc'>{props.desc}</p>
      
    </div>
  )
}

export default UserCard
