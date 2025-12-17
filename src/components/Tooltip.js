import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  // ensure exactly ONE React element
  if (!React.isValidElement(children)) return null;

  return React.cloneElement(
    children,
    {
      className: `${children.props.className || ""} tooltip`,
      onMouseEnter: () => setShow(true),
      onMouseLeave: () => setShow(false),
    },
    <>
      {children.props.children}
      {show && <div className="tooltiptext">{text}</div>}
    </>
  );
}
