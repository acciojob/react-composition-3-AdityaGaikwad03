import Tooltip from "./Tooltip";
import React from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2>
      </Tooltip>
      <br/>
      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}
