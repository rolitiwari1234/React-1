import React, { useState ,useMemo} from 'react'
import './App.css';

function App(){
  const [count,setCount]=useState(0)
  const [item,setItem]= useState(10)

  const  multiCountMemo = useMemo(function multiCount()
  {
   console.warn("multiCount")
   return count*2
  },[count])

    return (
      <div className="App">
        <h1>useMemo hook in react</h1>

        <h2>count : {count}</h2>
        <h2>item: {item}</h2>
        <h2> {multiCountMemo} </h2>

        <button  onClick=  {()=>setCount(count+1)} >update count</button>
        <button onClick = {()=>setItem(item*10)} >update item</button>
       </div>
    )
    };

export default App;
