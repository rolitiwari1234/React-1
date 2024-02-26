import{Link, Outlet} from "react-router-dom"

function Blog(){
    return(
    <div>
        <h1>blog Page</h1>
      
      <li> <Link to = " /"> Go to home page  </Link></li>
       <li><Link to = "/user/roli" state = {{name:"yashi",age : 12}}>Roli</Link></li>
       <li><Link to = "/user/tiwari">Tiwari</Link></li>
      <Outlet />
    </div>
    )
}
export default Blog;