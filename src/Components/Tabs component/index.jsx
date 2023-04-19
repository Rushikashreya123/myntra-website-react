import React from "react";
import TabsCommonComponent from "../../Common components/tabsCommnComponent";
import "./TabComponent.scss";
export default function TabsComponent({
  mensTab1,
  mensTab2,
  mensTab3,
  mensTab4,
  mensTab5,
  mensTab6,
  mensTab7,
  mensTab8,
  mensTab9,
  currentItem
}) {

  return (
    <div id="tabsComponent">
      <div>
        <div id="secDivision">
          <TabsCommonComponent mensTab1={mensTab1} heading='TopWear' currentItem = {currentItem}/>
        </div>
        <TabsCommonComponent mensTab1={mensTab2} heading='Indian & Festive Wear'currentItem = {currentItem}/>
      </div>
      
      <div>
        <div id="secDivision">
          <TabsCommonComponent mensTab1={mensTab3}heading='Bottomwear' currentItem = {currentItem}/>
        </div>
        <div id="secDivision">
          <TabsCommonComponent mensTab1={mensTab4}heading='Innerwear & Sleepwear' currentItem = {currentItem}/>
        </div>
        <TabsCommonComponent mensTab1={mensTab9}heading='Plus Size' currentItem = {currentItem}/>
      </div>
      <div>
        <div id="secDivision">
          <TabsCommonComponent mensTab1={mensTab5} heading='Footwear' currentItem = {currentItem}/>
        </div>
        <TabsCommonComponent mensTab1={mensTab9} heading='Personal Care & Grooming' currentItem = {currentItem}/>
        <TabsCommonComponent mensTab1={mensTab9} heading='Sunglasses & Frames'currentItem = {currentItem}/>
        <TabsCommonComponent mensTab1={mensTab9} heading='Watches'currentItem = {currentItem}/>
      </div>
      <div>
        <div id="secDivision">
          <TabsCommonComponent mensTab1={mensTab6} heading="Sports & Active Wear" currentItem = {currentItem}/>
        </div>
        <TabsCommonComponent mensTab1={mensTab7} heading="Gadgets" currentItem = {currentItem}/>
      </div>
      <div>
        <div id="secDivision">
          <TabsCommonComponent mensTab1={mensTab8} heading="Fashion Accessories" currentItem = {currentItem}/>
        </div>
        <TabsCommonComponent mensTab1={mensTab9} heading="Bags & Backpacks" currentItem = {currentItem}/>
        <TabsCommonComponent mensTab1={mensTab9} heading="Luggages & Trolleys" currentItem = {currentItem}/>
      </div>
      
    </div>
  );
}
