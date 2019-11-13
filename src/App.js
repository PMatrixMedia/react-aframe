/* eslint-disable jsx-a11y/alt-text */
import 'aframe'
import React, {Component} from 'react'
import Menuappbar from './components/appbar/menuappbar';
import VRscene from './components/vrscene/vrscene';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div className='nav-bar'>
      <Menuappbar></Menuappbar>
      </div>
      <div className='Virtual-scene'>
      <VRscene></VRscene>
      </div>
      </React.Fragment> 
    );
  }
}

export default App;