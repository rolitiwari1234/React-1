function Send(props){
    const data = {name:"roli tiwari",email:"roli@gmail.com"}
    return(
        <div>
            <h1>Send Component : {props.name}</h1>
            <button onClick={()=>props.alert(data)}>Click Me</button>
        </div>
    )
}
export default Send;