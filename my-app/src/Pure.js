
import React,{PureComponent} from 'react'
import './App.css';

class Pure extends PureComponent{
   render()
   {
    console.warn("check-rendending")
   return (
      <div className="App">
       <h1>Pure component  {this.props.count}</h1>
        </div>
    );
    }
}
  export default Pure;
