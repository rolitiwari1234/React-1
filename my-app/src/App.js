import React from 'react'
import './App.css';
import Cols from './Cols';





function App() {
  
  return (
    <div className="App">
      <h1>React fragment</h1>
   <table>
    <tbody>
      <tr>
       <Cols/>
      </tr>
    </tbody>
   </table>
     
    </div>
  );
}

export default App;
