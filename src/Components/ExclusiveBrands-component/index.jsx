import React from "react";
export default function exclusiveBrands({myntraExclusive}){


return(
    <div className="chordComponent">
            <div id="header">
                <h1>BEST OF MYNTRA EXCLUSIVE BRANDS</h1>
            </div>
            <div>
               {
                myntraExclusive.map((chord)=>
                
                    <img src={chord.image} alt="Chord Images" id="Chord"/>
                )} 
            </div>

    </div>
)

}