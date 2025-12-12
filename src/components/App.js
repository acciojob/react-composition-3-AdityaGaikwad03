import React, { useState, cloneElement } from "react";

export default function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  // We clone the child (h2 or p) and inject classes + events + new children
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
      {/* Preserve original child text/content */}
      {children.props.children}

      {/* Insert tooltip as a child INSIDE h2/p */}
      {show && (
        <div className="tooltiptext">{text}</div>
      )}
    </>
  );
}
