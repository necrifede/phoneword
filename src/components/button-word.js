import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { buttonLabels } from "../constants";

function ButtonsWord ({ rowlabel, collabel }) {
    return (
      <div className="col-4">
        <Button className="btn-block">
          <div className="numberic-button">{buttonLabels[rowlabel][collabel].numeric}</div>
          <div className="alphabet-button">{buttonLabels[rowlabel][collabel].alphabetic}</div>
        </Button>
      </div>
    )
}

export default ButtonsWord
