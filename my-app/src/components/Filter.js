import {useSearchParams} from "react-router-dom"

function Filter(){
    const [searchParams,setSeachParams]= useSearchParams()
    console.warn(searchParams.get("age"))
    console.warn(searchParams.get("city"))
    const age = searchParams.get('age')
    const city = searchParams.get("city")
    return(
        <div>
            <h1>Filter page</h1>
           <h1>Age is : {age}</h1>
           <h1>city is : {city}</h1>
           <input type = "text"onChange={(e)=>setSeachParams({text: e.target.value,age:90})}placeholder="Set age in Query params"/>
           <button onClick={()=>setSeachParams({age:40})}>Set age in Query params</button>
        </div>
    )
}
export default Filter;