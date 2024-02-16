import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <ul>
           <li><Link to = "/">Home</Link></li>
           <li><Link to = "/about">About</Link></li> 
            <li><Link to = "/">Contact</Link></li>  
          </ul>
        </div>
    )
}
export default Navbar;