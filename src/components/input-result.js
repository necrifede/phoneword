import React from 'react'
import { connect } from 'react-redux'

function InputResult ({ selected }) {
    return (
      <div className="row top-buffer">
        <div className="col-2"/>
        <div className="col-8">
          <input id="inputResult" className="form-control" type="text" placeholder="Result" disabled value={selected}/>
        </div>
        <div className="col-2"/>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    selected: state.result.text
  }
}

const mapDispatchToProps = dispatch => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputResult)
