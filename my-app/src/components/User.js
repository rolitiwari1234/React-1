import { useParams ,useLocation} from "react-router-dom";


function User(){
    const params = useParams();
    const {name} = params
    console.warn(name);
    const location = useLocation()
    console.log(location);
    return(
        <div>
            <h1>This is a {name}'s page .</h1>
        </div>
    )
}
export default User;