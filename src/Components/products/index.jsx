/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./products.scss";
import like from "../../Images/products/like.png";
import TabsCommonComponent from "../../Common components/tabsCommnComponent";
export default function Products({ products,dropDown,}) {
  return (
    <div>

      <div>
        <div className="dropdown"> <b id="dropdowndivcompo">SortBy:</b>
          <select id="option">
            {dropDown.map((list,index)=>(
                <option >{list}</option> 
            )
            
            )}
          </select>
        </div>
      </div>

      <div className="productsComponent">
        {products.map((chord, index) => (
          <div id="chordcomp" key={index}>
            <div>
              <div id="rating">
                <div>{chord.rating}</div>
                <div>
                  <img src={like} id="like" />
                </div>
                <div>|</div>
                <div>{chord.likes}</div>
              </div>
              <img src={chord.image} alt="Chord Images" id="prodImg" />
            </div>
            <div className="productsContent">
              <div>
                <b>{chord.title}</b>
              </div>
              <div>{chord.description}</div>
              <div className="priceDeatils">
                <div>
                  <b>{chord.rps}</b>
                </div>
                <div id="price">{chord.orgPrice}</div>
                <div id="discount">{chord.offer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
