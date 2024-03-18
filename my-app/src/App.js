import './App.css'
import React from 'react'
import Homecontainer from './containers/Homecontainer'
import HeaderContainer from './containers/HeaderContainer';

function App(){
  return(
    <div className='App'>
      
      <Homecontainer />
      <HeaderContainer />
    </div>
  )
}
export default App;