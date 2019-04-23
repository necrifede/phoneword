import React from "react";
import { connect } from "react-redux";
import { updateResultValue } from "../actionCreators"

function Words({ listWords, selected, setSelected }) {
  return (
    <div className="row top-buffer">
      <div className="col-2" />
      <div className="col-8">
        <ul className="list-group results-panel">
          {listWords.map(word => {
            const classes = "list-group-item  list-group-item-action";
            return (
              <li className={`${classes} ${word === selected ? "active" : ""}`} onClick={() => setSelected(word)}>
                {word}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-2" />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    listWords: state.result.list,
    selected: state.result.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelected: value => dispatch(updateResultValue(value))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Words);
