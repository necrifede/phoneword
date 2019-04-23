import React from "react";
import { Provider } from "react-redux";
import ButtonsRow from "./components/buttons-row";
import InputNumeric from "./components/input-numeric"
import InputResult from "./components/input-result"
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App container main-container">
      <h2 className="top-buffer">Phonewords</h2>
      <InputNumeric />
      <InputResult />
      <ButtonsRow rowlabel={0} />
      <ButtonsRow rowlabel={1} />
      <ButtonsRow rowlabel={2} />
      <ButtonsRow rowlabel={3} />
    </div>
  );
}

export default App;
