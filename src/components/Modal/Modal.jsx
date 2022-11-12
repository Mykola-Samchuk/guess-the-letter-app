import React from "react";
import "./modal.css";

export default function Modal({ active, setActive, children}) {
  
  return (
    <div className={active ? "modal-wrapp active" : "modal-wrapp"} >
      <div className="modal-content" onClick={(e)=>{e.stopPropagation()}}>
        {children}
      </div>
    </div>
  );
}