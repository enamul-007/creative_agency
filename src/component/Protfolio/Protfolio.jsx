import React from "react";
import "./Protfolio.css";
import Heading from "../../commonComponent/Heading";

const Protfolio = () => {
  return (
    <div>
      <div className="Protfolio_part">
        <div className="container">
          <Heading className=""
            title={"Our Work Portfolio"}
            description={
              `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
