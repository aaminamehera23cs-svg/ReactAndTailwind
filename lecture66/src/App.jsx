
import './App.css'

function App() {
  //below demonstrates functions for handling events associated with button click and mouser hover 
  /*
  function handleClick(){
    alert('button clicked')
  }
  function handleMouseOver(){
    alert('the paragraph is being pointed at')
  }
    */
  function handleInputChange(e){
    console.log('input value has been altered ',e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    alert('confirm to submit form');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange}></input>
      </form>
      
      
      
    </div>
    /*
    <div>
      <p onMouseOver={handleMouseOver} style={{"color":"red"}}>event handling under react</p>
      <button onClick={handleClick}>
        Click Here 
      </button>
      //below demonstrates immediate invocation
      <button onClick={alert('page has been interacted with')}></button>
      <button onClick={()=>alert('page has been interacted with')}></button>
    </div>
    */
  )
}

export default App
