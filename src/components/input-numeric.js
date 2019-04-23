import React from 'react'
import { connect } from 'react-redux'

function InputNumeric ({ value }) {
    return (
      <div className="row top-buffer">
        <div className="col-2"/>
        <div className="col-8">
          <input className="form-control" id="numericInput" type="text" name="numeric" value={value}/>
        </div>
        <div className="col-2"/>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    value: state.value.value
  }
}

const mapDispatchToProps = dispatch => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputNumeric)
