/* eslint-disable jsx-a11y/alt-text */
import 'aframe'
import React, {Component} from 'react'
import Menuappbar from './components/appbar/menuappbar';
import VRscene from './components/vrscene/vrscene';
import IframeComponent from './components/iframe';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div className='nav-bar'>
      <Menuappbar></Menuappbar>
      </div>
      <div className='Virtual-Scene'>
      <VRscene></VRscene>     
      </div>
      </React.Fragment> 
    );
  }
}

export default App;