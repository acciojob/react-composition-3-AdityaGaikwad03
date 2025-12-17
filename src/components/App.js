import Tooltip from "./Tooltip";
import React from "react";
import "./App.css"
export default function App() {
  return (
    <div>
      <Tooltip text="This is a heading tooltip">
        <h2>Hover over heading</h2><br/>
      </Tooltip>
      <Tooltip text="This is a paragraph tooltip">
        <p>Hover over paragraph</p>
      </Tooltip>
    </div>
  );
}
