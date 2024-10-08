import React from "react";
import "./Heading.css";

const Heading = ({ className, description, title }) => {
  return (
    <div className={className}>
      <h1 className="service__title">{title ? title : "Our Services"}</h1>
      <p className="service__summry">
        {description
          ? description
          : `There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form.`}
      </p>
    </div>
  );
};

export default Heading;
