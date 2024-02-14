import {Link} from "react-router-dom"

function Home (){
    return<>
    <h1>Home Page</h1>
    <p>This is a home page of our awesome app</p>
    <p>and here we are learning about router</p>
    <Link to = "/about"> go to about page</Link>
    </>
}
export default Home;