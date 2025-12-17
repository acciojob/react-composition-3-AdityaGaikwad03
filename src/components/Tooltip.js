import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  // If no children, render nothing
  if (!children) return null;

  return (
    <span
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      {show && <span className="tooltiptext">{text}</span>}
    </span>
  );
}
