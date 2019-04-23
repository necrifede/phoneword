import React from 'react'

function InputNumeric () {
    return (
      <div className="row top-buffer">
        <div className="col-2"/>
        <div className="col-8">
          <input className="form-control" id="numericInput" type="text" name="numeric" placeholder="Numeric Value"/>
        </div>
        <div className="col-2"/>
      </div>
    )
}

export default InputNumeric