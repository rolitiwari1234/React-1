import './App.css'
import React from 'react'
import UseRedux from './UserRedux';

function App(){
  return(
    <div className='App'>
      {/* <h1>React Redux </h1> */}
      <UseRedux  data = {{name:"Roli",age:"20"}} />
    </div>
  )
}
export default App;