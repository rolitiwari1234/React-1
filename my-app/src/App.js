import { BrowserRouter, Route,Routes,Navigate} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Navbar from './components/Navbar';
import Page404 from './componet/Page404'

function App(){
    return (
      <div className="App">
        <BrowserRouter>
   <Navbar/>
        
      <Routes>
         <Route path = "/" element = {<Home/>}/> 
         <Route path = "/about" elememt = {<About />}/>
          {/* <Route path = "/*" element = {<Page404/>}/>   */}
          <Route path = "/" element = {<Navigate to = "/"/>}/>  
           </Routes>
      </BrowserRouter>
      </div>
    )
    }

export default App;
