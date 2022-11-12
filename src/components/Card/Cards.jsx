import React, { useState } from "react";
import "./cards.css";

export default function Cards({ letter, handlerCard, index }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`card-cell ${active ? "active" : " "}`}
      onClick={() => {
        setActive(!active);
        handlerCard(letter, index);
      }}
    >
      <h3 className="card-item">{letter}</h3>
      <h3 className="card-mask">X</h3>

    </div>
  );
}
