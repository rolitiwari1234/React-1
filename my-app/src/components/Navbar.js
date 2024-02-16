import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <ul>
           <li><Link to = "/">Home</Link></li>
           <li><Link to = "/about">About</Link></li> 
            <li><Link to = "/">Contact</Link></li>  
            {/* <li><Link to = "/user/roli">Roli</Link></li>
            <li><Link to = "/user/tiwari">tiwari</Link></li> */}
          </ul>
        </div>
    )
}
export default Navbar;