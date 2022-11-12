import React from "react";
import "./button.css"

export default function Button({title, onClick}){

    return(
        <button className="btn" onClick={onClick}>{title}</button>
    )
}