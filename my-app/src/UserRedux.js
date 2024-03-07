import React from "react";

const UserRedux = (props)=>{
    const {data}= props

    return(
        <div>
            <h1>UserRedux</h1>
            <h3>{data.name}</h3>
            <h3>{data.age}</h3>
        </div>
    )
}
export default UserRedux