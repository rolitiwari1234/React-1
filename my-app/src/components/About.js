import{Link, Outlet} from "react-router-dom"

function About(){
    return(
    <div>
        <h1>About Page</h1>
       <p>This is about page of our awesome app</p>
       <p>and here we are learning about router</p>
      <li> <Link to = "/"> go to home page</Link></li>
       <li><Link to = "/user/roli" state = {{name:"yashi",age : 12}}>Roli</Link></li>
       <li><Link to = "/user/tiwari">Tiwari</Link></li>
      <Outlet/>
    </div>
    )
}
export default About;