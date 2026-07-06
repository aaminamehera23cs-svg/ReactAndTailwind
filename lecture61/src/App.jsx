import UserCard from "./components/UserCard"
import './App.css';

function App() {
  

  return (
    <div className='container'>
      <UserCard name='user1' desc='desc1' style={{"border-radius":"10px"}}/>
      <UserCard name='user2' desc='desc2' style={{"border-radius":"10px"}}/>
      <UserCard name='user3' desc='desc3' style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
