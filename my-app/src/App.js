import React from 'react'
import './App.css';
import Send from './Send'

function App() {
  
  function parentAlert(data)
  {
    console.log(data)
    alert(data.name)
  }
  return (
    <div className="App">
     
      <h1>Lifting State up</h1>
      <Send alert = {parentAlert}/>

     </div>
  );
}

export default App;
