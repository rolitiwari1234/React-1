import {Link} from "react-router-dom"

function About(){
    return(
    <div>
        <h1>About Page</h1>
     <p>This is about page of our awesome app</p>
    <p>and here we are learning about router</p>
    <Link to = "/"> go to home page</Link>
    </div>
    )
}
export default About;