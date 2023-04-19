import React from "react";
export default function TopBrands({TopBrandsData}){
    return (
        <div className="chordComponent">
          <div id="header">
            <h1>CATEGORIES TO BAG</h1>
          </div>
          <div>
            {TopBrandsData.map((chord) => (
              <img src={chord.image} alt="Chord Images" id="Chord" />
            ))}
          </div>
        </div>
      );
}