import {Link,NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <ul className='navbar'>
           <li><NavLink  
           style = {({isActive})=>{return{color: isActive ? "royalblue":"green"}}}
           className = "nav-bar-link" to = "/">Home</NavLink></li>

           <li><NavLink 
           style = {({isActive})=>{return{olor : isActive ? "darkmagenta" : "lightblue"}}}
           className = "nav-bar-link" to = "/about">About</NavLink></li> 

            <li><NavLink 
            style = {({isActive})=>{return{color : isActive ? "greenyellow" : "crimson"}}}
            className = "nav-bar-link"to = "/contact">Contact</NavLink></li> 

            {/* <li><Link to = "/user/roli">Roli</Link></li>
            <li><Link to = "/user/tiwari">tiwari</Link></li> */}
          </ul>
        </div>
    )
}
export default Navbar;