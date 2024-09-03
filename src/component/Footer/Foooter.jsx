import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.png";
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import FooterItem from "../../commonComponent/FooterItem";

const Foooter = () => {
  return (
    <>
      <div className="FooterPart">
        <div className="container">
          <div className="FooterWrapper">
            <div className="footerLeft">
              <picture>
                <img src={Logo} alt={Logo} />
              </picture>
              <p className="footerLeft_summry">
                There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.
              </p>
              <div className="footericon">
                <span className="icon">
                  <SiFacebook />
                </span>
                <span className="iconLeft">
                  <FaTwitter />
                </span>
              </div>
            </div>
            <div className="footerRight">
              <FooterItem
                title="Company"
                list={["About Us", "Work", "Latest News", "Careers"]}
              />
              <FooterItem
                title="Product"
                list={[
                  "Prototype ",
                  "Plans & Pricing",
                  "Customers",
                  "Integrations",
                ]}
              />
              <FooterItem
                title="Support"
                list={["Help Desk", "Sales", "Become a Partner", "Developers"]}
              />
              <FooterItem
                title="Contact"
                list={[
                  "524 Broadway , NYC",
                  `+1 777 - 978 - 5570`,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foooter;
