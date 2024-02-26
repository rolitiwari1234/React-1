import { BrowserRouter as Router, Route,Routes ,Link, BrowserRouter } from 'react-router-dom'
import './App.css';
import React from 'react'
import Page404 from './Page404'

function App(){
  return(
  <div className='App'>
   
    <Link to = "/">home</Link><br />
    <Link to = "/about">about</Link><br />
    <Link to = "/login">page404</Link>
  
    <Routes>
   
    <Route path = "/" exact = {true} element = {<Home />} />
      <Route path = "/about" element = {<About />} />
     <Route path = "/*" element = {<Page404 />} />
    
    </Routes>
    
  </div>)
}
function Home(){
  return(
    <div>
      <h1>home page</h1>
    </div>
  )
}
function About (){
  return(
    <div>
      <h1>about page</h1>
    </div>
  )
}
export default App;