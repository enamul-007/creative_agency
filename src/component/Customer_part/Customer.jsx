import React, { useState } from "react";
import "./Customer.css";
import Heading from "../../commonComponent/Heading";
import { FaStarHalfStroke } from "react-icons/fa6";
import Customer_img from "../../assets/customer_img.png";
import CustomerCard_icon from "../../assets/CustomerCard_icon.png";

const Customer = () => {
  let [arr, setArr] = useState([1,2,3])
  return (
    <>
      <div className="CustomerMain_part">
        <div className="container">
          <div className="Customer_heading_part">
            <h1 className="Heading_title">
              We Care About Our Customer Experience Too
            </h1>
            <p className="Heading_summry">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>

          <div className="CustomerCard_loop">
            {arr.map((el) => (
              <div className="CustomerCard">
                <div className="CustomerCard_part">
                  <div>
                    <picture>
                      <img src={Customer_img} alt={Customer_img} />
                    </picture>
                  </div>

                  <div className="star_icon">
                    {[...new Array(6)].map((item, index) => (
                      <FaStarHalfStroke />
                    ))}
                  </div>
                  <p className="CustomerCard_summry">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>

                  <img
                    className="CustomerCard_icon"
                    src={CustomerCard_icon}
                    alt={CustomerCard_icon}
                  />
                  <div className="designer_name">
                    <h4 className="designer_name_title">Mahid Ahmed</h4>
                    <p className="designer_name_summry">UX Designer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
