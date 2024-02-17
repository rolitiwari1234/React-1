import { BrowserRouter, Route,Routes,Navigate} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Navbar from './components/Navbar';
import User from './components/User';
import Filter from './components/Filter';
import Contact from './components/Contact';
import Company from './components/Company';
import Channel from './components/Channel'
import Other from './components/Other';

function App(){

    return (
      <div className="App">
        <BrowserRouter>
   <Navbar/>
      
      <Routes>
         <Route path = "/" element = {<Home/>}/> 
         <Route path = "/about" elememt = {<About />}/>
         <Route path = "/user " element = {<User/>}/>
         <Route path = "/filter" element =  {<Filter/>}/>
        <Route path = "/" element = {<Navigate to = "/"/>}/> 
         <Route path ="contact" element = {<Contact/>}/>
         <Route path = "company" element = {<Company/>}/>
         <Route path = "channel" element = {<Channel/>}/>
         <Route path = "/other" element = {<Other/>}/>
           </Routes>
      </BrowserRouter>
      </div>
    )
    }

export default App;
