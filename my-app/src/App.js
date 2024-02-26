import { BrowserRouter as Router, Route,Routes ,Link, BrowserRouter} from 'react-router-dom'
import './App.css';
import React from 'react'

function App(){
  return(
  <div className='App'>

    
    <BrowserRouter>
  
    <Link to = "/home">home</Link><br />
    <Link to = "/about">about</Link>
    <Routes>
      <Route path = "home" element = {<Home />} />
      <Route path = "about" element = {<About />} />
    </Routes>
    </BrowserRouter>
  </div>)
}
function Home(){
  return(
    <div>
      <h1>Home page</h1>
      <p>This is  home page of website .</p>
    </div>
  )
}
function About (){
  return(
    <div>
      <h1>about page</h1>
      <p>This is a about page of website </p>
    </div>
  )
}
     

export default App;