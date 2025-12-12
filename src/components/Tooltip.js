import {useState}  from "react";
import React from "react";

export default function Tooltip({text, children}){
    const [show, setShow] = useState(false);
    return(
        <div className="tooltip" 
        onMouseEnter={() => setShow(true)} 
        onMouseLeave={() => setShow(false)} 
        style={{display:"inline-block", position:"relative",backgroundcolor: "red", text: "fff"}}>
        {children}
        {show && (
            <div className="tooltiptext">{text}</div>
        )}
        </div>
    )
}