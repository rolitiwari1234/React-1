import {Link,NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <ul className='navbar'>
           <li><NavLink  className = "nav-bar-link" style = {{color:"violet"}}to = "/">Home</NavLink></li>
           <li><NavLink className = "nav-bar-link" to = "/about">About</NavLink></li> 
            <li><NavLink className = "nav-bar-link"to = "/">Contact</NavLink></li> 

            {/* <li><Link to = "/user/roli">Roli</Link></li>
            <li><Link to = "/user/tiwari">tiwari</Link></li> */}
          </ul>
        </div>
    )
}
export default Navbar;