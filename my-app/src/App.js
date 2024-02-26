import { BrowserRouter as Router, Route,Routes ,Link, BrowserRouter} from 'react-router-dom'
import './App.css';
import React from 'react'
import Nav from './Nav';
import Home from './Home'
import About from './About'

function App(){
  return(
  <div className='App'>
 
  <Nav />
  
    <Routes>
    
      <Route path = "/about" element = {<About />} />
      <Route path = "/"  exact = {true} element = {<Home />} />
    </Routes>
      
  </div>)
}
export default App;