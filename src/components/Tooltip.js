import {useState}  from "react";
import React from "react";

export default function Tooltip({text, children}){
    const [show, setShow] = useState(false);
     return cloneElement(
    children,
    {
      className: (children.props.className || "") + " tooltip",
      onMouseEnter: () => setShow(true),
      onMouseLeave: () => setShow(false),
      style: { position: "relative", display: "inline-block" }
    },
    <>
      {children.props.children}
      {show && <div className="tooltiptext">{text}</div>}
    </>
  );
}