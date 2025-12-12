
import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <div style={{ padding: "50px" }}>
      <Tooltip text="This is a tooltip message">
        <h2>Hover over me</h2>
      </Tooltip>

      <br /><br />

      <Tooltip text="Another helpful tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
    </div>
  )
}

export default App
