import { BrowserRouter, Route,Routes,Navigate} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Navbar from './components/Navbar';
import User from './components/User';

function App(){
    return (
      <div className="App">
        <BrowserRouter>
   <Navbar/>
        
      <Routes>
         <Route path = "/" element = {<Home/>}/> 
         <Route path = "/about" elememt = {<About />}/>
         <Route path = "/user " element = {<User/>}/>
        <Route path = "/" element = {<Navigate to = "/"/>}/> 
         
           </Routes>
      </BrowserRouter>
      </div>
    )
    }

export default App;
