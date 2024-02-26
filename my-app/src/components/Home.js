import {Link, Outlet} from "react-router-dom"

function Home (){
return(
        <div>
            
    <h1>Home Page</h1>
    <p>This is a home page of our awesome app</p>
    <p>and here we are learning about router</p>
    
   <li> <Link to = "/about"> go to about page</Link><br/><br/></li>
   <li> <Link to = "/blog">go to blog page</Link><br /><br /></li>
   <li> <Link to = "/layout">go to layout page</Link><br /><br /></li>
   <li> <Link to = "/contact">go to contact page</Link><br /><br /></li>
   
   <Outlet />
    </div>
    )
    }
export default Home;