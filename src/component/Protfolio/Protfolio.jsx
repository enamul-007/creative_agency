import React, { useState } from "react";
import "./Protfolio.css";
import Heading from "../../commonComponent/Heading";
import profolio_1 from "../../assets/profolio_1.png";
import { GoArrowRight } from "react-icons/go";

const Protfolio = () => {
  const [show , setshow] = useState(false);
  const handleclick = () => {
    setshow(!show);
  };
  console.log(show);
  return (
    <div>
      <div className="Protfolio_part">
        <div className="container">
          <div>
            <Heading
              className="profolio_styl"
              title={"Our Work Portfolio"}
              description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`}
            />
          </div>
          <div>
            <div className="protfolioCard_part" onClick={handleclick}>
              <picture>
                <img src={profolio_1} alt={profolio_1} />
              </picture>
                 {show && (
              <div className="profolioOverlay">
                <div className="profolioCardOverlay">
                  <h1 className="profolioCardOverlay_title">Graphic Design</h1>
                  <a className="profolioCardOverlay_summry" href="#">
                    See Details <GoArrowRight />
                  </a>
                </div>
              </div>
            )}
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
