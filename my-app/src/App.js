import './App.css'
import React,{useEffect,useState} from 'react'

function App(){
  const [user,setUser] = useState([]);
  const [name,setName] = useState("");
  const [id,setId] = useState("")
  const[username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  useEffect(()=>{
    getList()
  },[] )
  // console.warn(user)
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
        method:`DELETE`})
        .then((result)=>{
        result.json().then((resp)=>{
          console.warn(resp)
          getList()
        })
      })
  }
  function updateUser(id){
    console.warn(user[id-1])

     let item = user[id-1]
    setName(item.name)
    setId(item.id)
    setUsername(item.username)
    setEmail(item.email)
    
  }
  return(
    <div className="App">
    
      <h2>Delete Data with Api Call</h2>
      <table border = "1" style={{float:'left'}}>
        <tbody>
        <tr>
        <td>id</td>
          <td>Name</td>
          <td>username</td>
          <td>email</td>
          
        </tr>
        {
          user.map((item,i)=>
          <tr key = {i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <button onClick={()=>deleteUser(item.id)}>delete</button>
           <td><button onClick={()=>updateUser(item.id)}>update </button></td>
          </tr>)
        }
        </tbody>
      </table>
      <div>
        <input type  = "text" value = {name}/><br /><br />
        <input type = "text"value={id}/><br /><br/>
        <input type = "text"value={username}/><br/><br/>
        <input type = "text" value ={email}/><br/><br/>
        <button>update user</button>
    </div>
    </div>
    
  )
}
export default App;