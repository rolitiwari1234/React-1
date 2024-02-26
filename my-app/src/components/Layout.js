import { Outlet, Link } from "react-router-dom";


function Layout(){
  return (
    <div >
      <nav>
        <ul>
          <li>
            <Link to = "/home">Home</Link>
          </li>
          <li>
            <Link to = "/Blog">Blog</Link>
          </li>
          <li>
            <Link to = "/Contact">Contact</Link>
          </li>
          <li>
            <Link to = "/About">About</Link>
          </li>
          <li>
            <Link to = "/Layout">Layout</Link>
          </li>
        </ul>
      </nav>
     <Outlet />
     </div>
  )
};

export default Layout;