import './App.css'
import React from 'react'

function App(){
  const [data,setData] = React.useState({name:"roli",age:20})
  return(
    <div className='App'>
      <h1>State Object with Hooks</h1>
      <input type = "text" placeholder='enter your name' value = {data.name}
      onChange={(e)=>setData({...data,name:e.target.value})}/><br/><br/>

      <input type = "text" placeholder ="enter your age" value = {data.age}
      onChange = {(e)=>setData({...data,age:e.target.value})}/>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
    </div>
  )
}
export default App;