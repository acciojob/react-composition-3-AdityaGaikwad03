import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return React.cloneElement(
    children,
    {
      onMouseEnter: () => setShow(true),
      onMouseLeave: () => setShow(false)
    },
    [
      children.props.children,
      show && <div key="tooltip">{text}</div>
    ]
  );
};

export default Tooltip;
