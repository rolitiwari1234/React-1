import React, { useRef} from 'react'
import './App.css';
import Forward from './Forward';

function App(){
  let inputRef = useRef(null)
    function updateInput()
    {
      inputRef.current.value = "1000"
      inputRef.current.style.color = "red"
      inputRef.current.focus()
    }
   
    return (
      <div className="App">
       <h1>forwardref in react</h1>
       <Forward ref = {inputRef}/>
       <button onClick = {updateInput}>update inputbox</button>
      
      </div>
    )
    }
    

export default App;
