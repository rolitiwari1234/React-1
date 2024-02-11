import React,{PureComponent} from 'react'
import './App.css';
import Pure from './Pure';

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      count:1
    }
  }
  render(){
    console.warn("check-rerending")
    return (
      <div className="App">
        <Pure count = {this.state.count}/>
      
       <button onClick={()=>this.setState({count:this.state.count+1})}
       >update count</button>
      </div>
    );
  }
}

  



export default App;
