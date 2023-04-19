/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./footer.scss";
export default function Footer({
  FooterShopping,
  UsefuLinks,
  CoustomerPolicies,
  AppOnMobile,
  apppPromises
}) {
  return (
    <footer>
      <div className="Footer">
        <div className="FooterContent">
        <div className="section1">
          <div className="footer_left">
            <div >
              <h5 id="heading">ONLINE SHOPPING</h5>
            </div>
            {FooterShopping.map((data) => (
              <div> {data}</div>
            ))}
          </div>
          <div className="footer_left">
            <div >
              <h5 id="heading">USEFUL LINKS</h5>
            </div>
            {UsefuLinks.map((data) => (
              <div> {data}</div>
            ))}
          </div>
        </div>
        <div className="footer_Middle">
          <div>
            <h5 id="heading">CUSTOMER POLICIES</h5>
          </div>
          {CoustomerPolicies.map((data) => (
            <div> {data}</div>
          ))}
        </div>

        <div className="footerImages">
          <div>
            <h5 id="heading">EXPERIENCE MYNTRA APP ON MOBILE</h5>
          </div>
          {AppOnMobile.map((data) => (
            <div>
              <div id="apps">
                <div><img src={data.image1} id="footerimage"/></div>
                <div><img src={data.image2} id="footerimage" /></div>
              </div>
              <div><b>{data.text}</b></div>
              <div id="SocialmediaIcons">
                <div><img src={data.facebookIcon} id="footerSocialmediaIcons"/></div>
                <div><img src={data.twitterIcon}id="footerSocialmediaIcons"/></div>
                <div><img src={data.youTubeIcon}id="footerSocialmediaIcons"/></div>
                <div><img src={data.instagramIcon}id="footerSocialmediaIcons"/></div>
              </div>
            </div>
          ))}
        </div>
        <div className="promises">
            <div>
            {apppPromises.map((data) => (
            <div>
                <div id="original">
                    <div><img src={data.image} id="originalImage"/></div>
                    <div id="original_Text">
                    <div><b>{data.text}</b></div>
                    <div>{data.text2}</div>
                    </div>
                    
                </div>
                <div id="Return">
                    <div><img src={data.imageReturn}id="ReturnImage"/></div>
                    <div>
                        <div><b>{data.textReturn}</b></div>
                        <div>{data.textReturn2}</div>
                    </div>
                    
                </div>

            </div>
          ))}
            </div>
            


        </div>


        </div>
        
      </div>
    </footer>
  );
}
