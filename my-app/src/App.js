import React, { useRef ,useState} from 'react'
import './App.css';


function App(){
    
    
    return (
      <div className="App">
       <h1>High Order Component</h1>
      <HOCRed cmp = {Counter} />
      <HOCGreen cmp = {Counter}/>
      <HOCBlue cmp = {Counter}/>
      </div>
    )
    }
    function HOCRed(props)
    {
      return <h2 style ={{backgroundColor:'rosybrown',width:"200px"}}><props.cmp/></h2>
    }
    function HOCGreen(props)
    {
      return<h2 style = {{backgroundColor:'blueviolet',width:"200px"}}><props.cmp/></h2>
    }
    function HOCBlue(props)
    {
      return<h2 style = {{backgroundColor:'palegreen',width:'200px'}}><props.cmp/></h2>
    }
    function Counter(){
      const[count,setCount] = useState(0)
      return<div>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>update</button>
      </div>

    }

export default App;
