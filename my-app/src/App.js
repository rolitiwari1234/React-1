import { BrowserRouter, Route,Routes,Link } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';


function App(){
    return (
      <div className="App">
        <BrowserRouter>
       
        <Navbar/>
       <Routes>
       
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/About' elememt = {<About />}/>
       
       </Routes>
      </BrowserRouter>
      </div>
    )
    }

export default App;
