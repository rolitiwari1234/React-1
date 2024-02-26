import { BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css';
import React from 'react'
import Home from './components/Home';
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Layout from './components/Layout';
function App(){
  return(
  <div className='App'>
    <BrowserRouter>
    <Routes >
    
    <Route path = "/home" element = {<Home />} />
    <Route path = "/about" element = {<About />} />
    <Route path = "/blog" element = {<Blog />} />
    <Route path = "/layout" element = {<Layout />} />
    <Route path = "/contact" elemnet = {<Contact />} />
   
    </Routes>
    </BrowserRouter>
  </div>)
}


     

export default App;