import React, { useState } from "react";
import "./Header.scss";
import search from "../../Images/Header/search.png";
import profile from "../../Images/Header/profile.png";
import MyntraLogo from "../../Images/Header/myntraLogo.png";
import wishlist from "../../Images/Header/wishlist.png";
import bag from "../../Images/Header/bag.jpg";
import TabsComponent from "../Tabs component";
import TabsCommonComponent from "../../Common components/tabsCommnComponent";
import { Link } from "react-router-dom";
export default function Header(props) {
  const [hoverState, setHoverstate] = useState(false);
  const [showContent, setShowcontet] = useState(false);
  const [item, setItem] = useState("Men")
  const tabsName = [
    "Men",
    "Women",
    "Kids",
    "Home & Leaving",
    "Beauty",
    "Studio",
  ];

  const show = (item) => {
    setItem(item)
    setHoverstate(true);
    document.getElementById("tabsComponent").style.display = "flex";
  };
  const notshow = (item) => {
    document.getElementById("tabsComponent").style.display = "none";
    setHoverstate(false);
  };
  const handleMouseEnter = () => {
    setShowcontet(true);
  };
  const handleMouseLeave = () => {
    setShowcontet(false);
  };

  return (
    <div className="HeaderComponent">
      <div id="headerLeft">
        <div>
          <Link to="/">
            <img src={MyntraLogo} alt="MyntraLogo" id="myntralogo" />
          </Link>
        </div>
        <div className="tabs">
          {tabsName.map((item, index) => (
            <div
              className={`hoverd${index}`}
              onMouseEnter={() => {
                show(item);
                console.log(("item", index));
              }}
              onMouseLeave={() => notshow(item)}
            >
              <Link to="/products" id="tabsData">
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div id="headerRight">
        <div className="headersearchbar">
          <img src={search} alt="searchIcon" id="searchIcon" />
          <input
            type="text"
            placeholder="search for Products,brands and more"
            onChange={props.onSearchTextChange}
            id="input"
          />
        </div>

        <div id="profile">
          <div>
            <button id="button">update</button>
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            
            <img src={profile} alt="profileIcon" id="profileIcon" />
            <div id="whishlist">Profile</div>
          </div>
          <div>
            <Link to="/wishlist">
              <img src={wishlist} alt="wishlistIcom" id="wishlistIcon" />
              <div id="whishlist">Wishlist</div>
            </Link>
          </div>
          <div>
            <Link to="/Bag">
              <img src={bag} alt="bagIcom" id="bagIcon" />
              <div id="whishlist">Bag</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="tabscomponent">
        <TabsComponent
          mensTab1={props.mensTab1}
          mensTab2={props.mensTab2}
          mensTab3={props.mensTab3}
          mensTab4={props.mensTab4}
          mensTab5={props.mensTab5}
          mensTab6={props.mensTab6}
          mensTab7={props.mensTab7}
          mensTab8={props.mensTab8}
          mensTab9={props.mensTab9}
          currentItem = {item}
        />
        {showContent ? 
        <div id="profileData">
          <div id="profileBorder">
            <TabsCommonComponent mensTab1={props.firstProfileData} />
          </div>
          <div id="profileBorder">
            <TabsCommonComponent mensTab1={props.secondProfileData} />
          </div>
          <div id="profileBorder">
            <TabsCommonComponent mensTab1={props.thirdProfileData} />
          </div>
          <div id="profilecompo">
            <TabsCommonComponent mensTab1={props.fourthProfileData} />
          </div>
        </div> : <></> }
      </div>
    </div>
  );
}
