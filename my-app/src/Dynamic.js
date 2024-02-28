import React from 'react'
import { useParams } from 'react-router-dom';

function Dynamic ()
{
     const params = useParams()
    
     console.warn(params)
    return(
        <div>
            <h1>this is dynamics no . {params.id}</h1>
            <h2>dynamics name {params.name} </h2>
           
        </div>
    )
}
export default Dynamic; 