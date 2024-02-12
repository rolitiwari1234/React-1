import React, { useState } from 'react'
import './App.css';


function App(){
   let [val,setVal]= useState("000")
    let [item,setItem] = useState("")
    return (
      <div className="App">
       <h1>controlled component</h1>
      <input type = "text" value = {val} onChange={(e)=>setVal(e.target.value)}/>
      <input type = "text" value = {item} onChange = {(e)=>setItem(e.target.value)}/>
      <h3>value {val}</h3>
      <h3>item {item}</h3>
      </div>
    )
    }
    

export default App;
