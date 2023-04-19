import React from "react";
import './deal.scss';
export default function DealOfTheDay(props){
    return(
        <div className="chordComponent">
            <div id="header">
                <h1>DEAL OF THE DAY</h1>
            </div>
            <div>
               {
                props.Chordimages.map((chord)=>
                (
                    <img src={chord.image} alt="Chord Images" id="Chord"/>
                ))} 

            </div>



        </div>

    );

}