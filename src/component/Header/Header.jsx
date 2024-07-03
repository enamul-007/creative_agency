import React from "react";
import logo from "../../assets/Logo.png"
import "./Header.css"
function header() {
  const navItem = ["Home", "About", "Service", "Blog", "Contact"];
    return (
      <>
        <div className="header_part">
          <div className="container">
            <div className="navWrappr">
              <div className="logo">
                <picture>
                  <img src={logo} alt={logo} />
                </picture>
              </div>
              <div>
                <ul className="menuItem">
                  {navItem.map((item) => (
                    <li>
                      <a href="#" className="menu__list">
                        {" "}
                        {item}{" "}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <button className="btn">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default header;
