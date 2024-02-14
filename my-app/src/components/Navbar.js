import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <ul>
                {/* <li><Link to = "/">Home</Link></li>
           <li><Link to = "/About">About</Link></li> */}
           <li><a href = '/'>Home</a></li>
           <li><a href ='/about'>About</a></li>
           </ul>
        </div>
    )
}
export default Navbar;