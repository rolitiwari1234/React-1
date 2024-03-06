import React, { useEffect,useRef } from 'react'


function Preprops(props){

    const lastVal = useRef()
    useEffect(()=>{
        lastVal.current = props.count
    })
    const PreviousProps = lastVal.current

    return(
        <div>
            <h1>PreviousProps value {PreviousProps}</h1>
            <h1>current value {props.count} </h1>
        </div>
    )
}
export default Preprops