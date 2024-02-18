import './App.css';
import React from 'react'
import {Link, Route, BrowserRouter as Router } from "react-router-dom"

function App(){
return (
      <div className="App">
        <Router>
      <Link to = "/home">Home page</Link>
      <Link to = "/about">About page</Link>
      <Route path = "/home" > <Home/> </Route>
      <Route path = "/about"><About/></Route>   
    </Router>
       </div>) }
function Home()
    {
      return(
        <div>
          <h1>Home page</h1>
          <p>This is a home page website .</p>
        </div>)}
    function About (){
      return(
        <div>
          <h1>About page</h1>
          <p>This is a about page website .</p>
        </div>
      )
    }
    export default App;
