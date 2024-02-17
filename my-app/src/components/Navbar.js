import {Link,NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <ul className='navbar'>
           <li><NavLink  className = "nav-bar-link"to = "/">Home</NavLink></li>

           <li><NavLink className = "nav-bar-link" to = "/about">About</NavLink></li> 

            <li><NavLink className = "nav-bar-link"to = "/contact">Contact</NavLink></li> 

            <li><NavLink className= "nav-bar-link" to = "/filter">Filter</NavLink></li>

            <li><NavLink className= "nav-bar-link" to = "/login">Login</NavLink> </li>

            {/* <li><Link to = "/user/roli">Roli</Link></li>
            <li><Link to = "/user/tiwari">tiwari</Link></li> */}
          </ul>
        </div>
    )
}
export default Navbar;