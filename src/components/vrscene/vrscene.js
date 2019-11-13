/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import 'aframe'
import React, { Component } from 'react'
import './stylesheet.css';

export default class VRscene extends React.Component {
  render () {
    return (
        <div id="myEmbeddedScene">
        <a-scene embedded>
        <a-sky src={require('../../assets/360_world.jpg')} />
        <a-entity oculus-touch-controls="hand: left"></a-entity>
        <a-entity oculus-touch-controls="hand: right"></a-entity>
        </a-scene>
        </div>
    );
  }
}

