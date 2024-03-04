import './App.css';
import React ,{useEffect, useState}from 'react'

function App(){
  const [userId,setUserId] = useState("")
  const [id,setId]= useState("");
  const [title,setTitle]= useState("");
  
    function saveUser(){
      console.warn({userId,id,title})
      let data = {userId,id,title}
        fetch("https://jsonplaceholder.typicode.com/todos/users",{
          method:'POST',
          headers:{
            'Accept':'Application/json',
            'Content-Type':'Applicatio/json'
          },
          body:JSON.stringify(data)
          }).then((result)=>{
            console.warn("result",result)
            result.json().then((resp)=>{
              console.log("resp",resp)
            })
          })
      }
  return(
  <div className='App'>
   <h1> Post Api example</h1>
   <input type = "text" value = {userId} name = "userId" onChange={(e)=>{setUserId(e.target.value.userId)}}/><br /><br />
   <input type = "text"value={id} name = "id" onChange={(e)=>{setId(e.target.value.id)}}/><br /><br />
   <input type = "text" value={title} name = "title" onChange={(e)=>{setTitle(e.target.value.title)}}/><br /><br />
   <button type = "button" onClick={saveUser}>Save new user</button>
     </div> 
  )}
export default App;