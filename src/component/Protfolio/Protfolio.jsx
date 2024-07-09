import React, { useState } from "react";
import "./Protfolio.css";
import Heading from "../../commonComponent/Heading";
import profolio_1 from "../../assets/profolio_1.png";
import profolio_2 from "../../assets/profolio_2.png";
import Portfolio_3 from "../../assets/Portfolio_3.png";
import Portfolio_4 from "../../assets/Portfolio_4.png";
import Portfolio_5 from "../../assets/Portfolio_5.png";
import Portfolio_6 from "../../assets/Portfolio_6.png";

import { GoArrowRight } from "react-icons/go";

const Protfolio = () => {
  const [show , setshow] = useState(false);
  const handleclick = () => {
    setshow(!show);
  };

  const allprotfolioCard_part = [
    {
      id: 1,
      profolio_1: profolio_1,
      title: "Graphic Design",
      button: "See Details",
      icon: <GoArrowRight />,
    },
    {
      id: 2,
      profolio_1: profolio_2,
      title: "Graphic Design",
      button: "See Details",
      icon: <GoArrowRight />,
    },
    {
      id: 3,
      profolio_1: Portfolio_3,
      title: "Graphic Design",
      button: "See Details",
      icon: <GoArrowRight />,
    },
    {
      id: 4,
      profolio_1: Portfolio_4,
      title: "Graphic Design",
      button: "See Details",
      icon: <GoArrowRight />,
    },
    {
      id: 5,
      profolio_1: Portfolio_5,
      title: "Graphic Design",
      button: "See Details",
      icon: <GoArrowRight />,
    },
    {
      id: 6,
      profolio_1: Portfolio_6,
      title: "Graphic Design",
      button: "See Details",
      icon: <GoArrowRight />,
    },
    {
      id: 7,
      profolio_1: profolio_1,
      title: "Graphic Design",
      button: "See Details",
      icon: <GoArrowRight />,
    },
    {
      id: 8,
      profolio_1: profolio_2,
      title: "Graphic Design",
      button: "See Details",
      icon: <GoArrowRight />,
    },
  ];

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

          <div className="allprotfolioCard_part">
            {allprotfolioCard_part?.map((item) => (
              <div
                key={item.id}
                className="protfolioCard_part"
                
                onClick={handleclick}
              >
                <picture>
                  <img src={item.profolio_1} alt={item.profolio_1} />
                </picture>
                {show && (
                  <div className="profolioOverlay">
                    <div className="profolioCardOverlay">
                      <h1 className="profolioCardOverlay_title">
                        {item.title}
                      </h1>
                      <a className="profolioCardOverlay_summry" href="#">
                        {item.button} <GoArrowRight />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
