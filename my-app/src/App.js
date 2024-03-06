import './App.css'
import React, { useState } from'react'
import Preprops from './Preprops';

function App(){
  const [count,setCount] = React.useState(0)

  
  return(
    <div className='App'>
     
     <Preprops count = {count} />
     <button onClick = {()=>setCount(Math.floor(Math.random()*10)) }>update count</button>
    </div>
  )
}
export default App;