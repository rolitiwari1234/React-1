
import {Link, Outlet} from "react-router-dom"
function Contact(){
    return(
        <div>
            <h1>Contact Page</h1>
            <h2>Here we have some other business</h2>
           
            <li><Link to = "/company"> Company</Link><br/></li>
            <li><Link to = "/channel"> Channel</Link><br/></li>
            <li><Link to = "/other"> Other</Link></li>
            
           
            <Outlet />
            
        </div>
    )
}
export default Contact;