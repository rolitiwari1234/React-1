import './App.css';
import React ,{useEffect, useState}from 'react'

function App(){
  const [user,setUser] = useState([])
  useEffect(()=>{
    getList()
  },[] )
  console.warn(user)
  function getList(){
      fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
        result.json().then((resp)=>{
          // console.warn(resp)
          setUser(resp)
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
  return(
    <div className="App">
      <h2>Delete Data with Api Call</h2>
      <table border = "1">
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
          <tr key = {i
          }>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <button onClick={()=>deleteUser(item.id)}>delete</button>
          </tr>)
        }
        </tbody>
      </table>
    </div>
  )
}
export default App;