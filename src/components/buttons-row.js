import React, { Component } from 'react'
import ButtonWord from './button-word'

class ButtonsRow extends Component{
  render () {
    return (
      <div className="row top-buffer">
        <div className="col-2"/>
        <div className="col-8">
          <div className="row top-button-buffer">
            <ButtonWord rowlabel={this.props.rowlabel} collabel={0}></ButtonWord>
            <ButtonWord rowlabel={this.props.rowlabel} collabel={1}></ButtonWord>
            <ButtonWord rowlabel={this.props.rowlabel} collabel={2}></ButtonWord>
          </div>
        </div>
        <div className="col-2"/>
      </div>
    )
  }
}

export default ButtonsRow
