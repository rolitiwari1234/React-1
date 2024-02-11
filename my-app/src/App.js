import React from 'react'
import './App.css';
import User from './User'



function App() {
  const users = [
    {
      name :"roli",email:"roli@gmail.com",address:"222"
    },
    {
      name :"yashi",email:"yashi@gmail.com",address:"222"
    },
    {
      name :"shiv",email:"shiv@gmail.com",address:"222"
    },
    {
      name :"radhe",email:"radhe@gmail.com",address:"222"
    },
  ]
  return (
    <div className="App">
      <h1>reuse component in loop</h1>
   
      {
        users.map((item,i)=>
      <User data = {item}/>)
      }
    </div>
  );
}

export default App;
