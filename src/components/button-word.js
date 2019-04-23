import React from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { buttonLabels } from "../constants";
import { updateNumericValue } from '../actionCreators.js'

function ButtonsWord ({ rowlabel, collabel, numbericPressed }) {
    return (
      <div className="col-4">
        <Button className="btn-block" onClick={() => numbericPressed(buttonLabels[rowlabel][collabel].numeric)}>
          <div className="numberic-button">{buttonLabels[rowlabel][collabel].numeric}</div>
          <div className="alphabet-button">{buttonLabels[rowlabel][collabel].alphabetic}</div>
        </Button>
      </div>
    )
}

const mapStateToProps = state => {
  return { }
}

const mapDispatchToProps = dispatch => {
  return {
    numbericPressed: value => {
      dispatch(updateNumericValue(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsWord)
