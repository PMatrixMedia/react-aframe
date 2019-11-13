/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './stylesheet.css';
export default class IframeComponent extends React.Component {
  render() {
    return (
      <div>
        <iframe src={this.props.src} height={this.props.height} width={this.props.width}  className="FrameSize"/>
      </div>
    )
  }
}