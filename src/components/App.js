import React from "react";
import Tooltip from "./Tooltip";
import "./App.css";

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <h2 className="tooltip">Hover over me</h2>
      </Tooltip>

      <Tooltip text="This is another tooltip">
        <p className="tooltip">Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
