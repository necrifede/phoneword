import React, { Component } from "react";
import { connect } from "react-redux";
import { updateResult } from "../actionCreators"

class InputNumeric extends Component {

  componentDidUpdate(prevProps, prevState) {
    this.props.updateResult(this.props.value)
  }

  render() {
    return (
      <div className="row top-buffer">
        <div className="col-2" />
        <div className="col-8">
          <input
            className="form-control"
            id="numericInput"
            type="text"
            name="numeric"
            value={this.props.value}
            readOnly
          />
        </div>
        <div className="col-2" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.value.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateResult: value => dispatch(updateResult(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputNumeric)
