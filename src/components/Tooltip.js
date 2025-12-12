import React, { useState, cloneElement } from "react";

export default function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  // If no children passed, return null (prevents Cypress crash)
  if (!children) return null;

  return cloneElement(
    children,
    {
      className: `${children.props.className || ""} tooltip`,
      onMouseEnter: () => setShow(true),
      onMouseLeave: () => setShow(false),
      style: {
        ...(children.props.style || {}),
        position: "relative",
        display: "inline-block",
      },
    },
    <>
      {children.props.children}
      {show && <div className="tooltiptext">{text}</div>}
    </>
  );
}
