import React, { useEffect, useState } from "react";
import './index.scss'
export default function TabsCommonComponent({mensTab1,heading,currentItem}){

    function getColor(item){
        switch(item){
            case "Men" : return "pinkClass";
            case "Women" : return "purpleClass";
            case "Kids" :return 'orangeClass';
            case "Home & Leaving" :return 'yellowClass';
            case "Beauty" :return 'greenClass';
            case "Studio":return 'redClass'
            default : return "orangeClass"
        }
    }
    
    
    return(
        <div>
            <div className={getColor(currentItem)}>{heading}</div>    
            <div>
                {mensTab1.map((item) => (
                <div>{item}</div>
                ))}
            </div>          
        </div>  

        
    );

}