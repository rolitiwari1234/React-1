import {Link,useNavigate} from "react-router-dom"

function Home (){
    const navigate = useNavigate();
    const navToPage = (url)=>{
        navigate(url)
    
    }
    return(
        <div>
            
    <h1>Home Page</h1>
    <p>This is a home page of our awesome app</p>
    <p>and here we are learning about router</p>
    <Link to = "/about"> go to about page</Link><br/><br/>
    <button onClick={()=>navToPage('/about')}>go to about page</button><br/><br/>
    <button onClick={()=>navToPage('/filter')}>go to filter page</button>
    </div>
    )
}
export default Home;