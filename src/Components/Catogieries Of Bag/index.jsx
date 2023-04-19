import React from "react";
import "./Catogeries.scss";
export default function CatogeriesOfBag({ Catogieries }) {
  return (
    <div className="chordComponent">
      <div id="header">
        <h1>CATEGORIES TO BAG</h1>
      </div>
      <div>
        {Catogieries.map((chord) => (
          <img src={chord.image} alt="Chord Images" id="Chord" />
        ))}
      </div>
    </div>
  );
}
