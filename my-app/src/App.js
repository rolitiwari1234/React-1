import React, { useRef} from 'react'
import './App.css';

function App(){
  let inputRef = useRef(null)
  function handleInput()
  {
   console.warn("function call")
  //  inputRef.current.value="100"
  //  inputRef.current.focus()
  inputRef.current.style.color= "red"
  inputRef.current.style.display = "none"
  }

   
    return (
      <div className="App">
       <h1>ref in react</h1>
       <input type = "text" ref = {inputRef}/>
       <button onClick={handleInput}>Handle input </button>
       </div>
    )
    }
    

export default App;
