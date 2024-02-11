import React, { createRef} from 'react'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.inputRef = createRef();
  }
  componentDidMount(){
  //  console.warn(this.inputRef.current.value = "100")
  }
  getVal(){
    console.warn(this.inputRef.current.value)
    this.inputRef.current.style.color="red"
    this.inputRef.current.style.backgroundColor="blue"
  }
   render(){

   
    return (
      <div className="App">
       <h1>ref in react</h1>
       <input type = "text" ref = {this.inputRef}/>
       <button onClick={()=>this.getVal()}>inputRef</button>
       </div>
    )
   }
    };

export default App;
