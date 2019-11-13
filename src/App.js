/* eslint-disable jsx-a11y/alt-text */
import 'aframe'
import React, {Component} from 'react'

class App extends Component {
  render () {
    return (
      <a-scene>
        <a-sky src={require('./assets/360_world.jpg')} />
      </a-scene>
    );
  }
}

export default App;