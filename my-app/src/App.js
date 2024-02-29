

import './App.css';
import React ,{useEffect, useState}from 'react'


function App(){
  const [data,setdata] = useState([])
  useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/todos")
   .then((result)=>{
    result.json().then((response)=>{
      //  console.log("result",response)
       setdata(response)
    })
   }
  
   
  )},[])
   console.log(data)
  return(
  <div className='App'>
   <h1>   API routing</h1>
        <table border = "1">
          <tr>
            <td>userId</td>
            <td>Id</td>
            <td>title</td>
          </tr>
          {
            data.map((item)=>
            <tr>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>)
          }
        </table> 
     </div> 
  )}
export default App;