import React from "react";
import { Provider } from "react-redux";
import ButtonsRow from "./components/buttons-row";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App container main-container">
      <h2>Phonewords</h2>
      <ButtonsRow rowlabel={0} />
      <ButtonsRow rowlabel={1} />
      <ButtonsRow rowlabel={2} />
      <ButtonsRow rowlabel={3} />
    </div>
  );
}

export default App;
