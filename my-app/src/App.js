
import { BrowserRouter as Router ,Link, Route,Routes} from 'react-router-dom';
import './App.css';
import React from 'react'
import Dynamic  from './Dynamic';

function App(){
  const dynamics = [
    {id:"1",name:"roli", email:"roli@gmail.com",},
    { id:"2",name:"yashi",email:"yashi@gmail.com",},
    {id:"3",name:"yash",email:"yash@gmail.com"},]

  return(
  <div className='App'>
    
   <h1> React Dynamic Routing</h1>
   {
    dynamics.map((item)=>
    <div><Link to = {"/dynamics/" + item.id}><h3>{item.name}</h3></Link></div>
    )
   }
  <Routes>
    <Route path = "/dynamics/:id" element = { <Dynamic />}> </Route>
  </Routes>
    </div>
    )}
export default App;