import React,{useEffect,useState} from 'react'
import './App.css'

function App(){

  const [user,setUser] = useState([]);
  const [name,setName] = useState("");
  const [id,setId] = useState("")
  const[username,setUsername] = useState("")
  const[email,setEmail] = useState("")

  useEffect(()=>{
    getList()
  },[] )
 
  function getList(){
      fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
        result.json().then((resp)=>{
          // console.warn(resp)
          setUser(resp)

          setName(resp[0].name)
          setId(resp[0].id)
          setUsername(resp[0].username)
          setEmail(resp[0].email)

        })
      })}
      function deleteUser(id){
       fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        method:'DELETE'
       }).then((result)=>{
        result.json().then((resp)=>{
          console.warn(resp)
          getList()
        })
       })
      }
    
  function selectUser(id){
    console.warn("function call",user[id-1])

     let item = user[id-1]
    setName(item.name)
    setId(item.id)
    setUsername(item.username)
    setEmail(item.email)

  }
  function updateUser(){
    let item ={name,id,username,email}
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
      method:"PUT",
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getList()
      })
    })
  }
  return(
    <div className="App">
    <h2>Delete Data with Api Call</h2>
      <table border = "1" >
        <tbody>
        <tr>
        <td>id</td>
          <td>Name</td>
          <td>username</td>
          <td>email</td>
          <td>optations</td>
         </tr>
        {
          user.map((item,i)=>
          <tr key = {i}>
          
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <button onClick={()=>deleteUser(item.id)}>delete</button>
           <td><button onClick={()=>selectUser(item.id)}>update </button></td>
          </tr>)
        }
        </tbody>
      </table>
      <div >
        <input type  = "text" value = {name} onChange={(e)=>setName(e.target.value)}/><br /><br />
        <input type = "text" value = {id} onChange={(e)=>setId(e.target.value)}/><br /><br/>
        <input type = "text" value = {username} onChange = {(e)=>setUsername(e.target.value)}/><br/><br/>
        <input type = "text" value = {email} onChange = {(e)=>setEmail(e.target.value)}/><br/><br/>
        <button onClick={updateUser}>update user</button>
    </div>
    </div>

  )
}
export default App;