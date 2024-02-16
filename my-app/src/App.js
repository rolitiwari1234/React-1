import { BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Navbar from './components/Navbar';


function App(){
    return (
      <div className="App">
        <BrowserRouter>
   <Navbar/>
        
      <Routes>
         <Route path = "/" element = {<Home/>}/> 
         <Route path = "/about" elememt = {<About />}/>
           </Routes>
      </BrowserRouter>
      </div>
    )
    }

export default App;
