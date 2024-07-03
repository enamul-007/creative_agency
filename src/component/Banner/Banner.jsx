import React from "react";
import "./Banner.css";
import Banner from "../../assets/Banner.png";

const banner = () => {
  return (
    <>
      <div className="BannerPart">
        <div className="container">
          <div className="bannerWrapper">
            <div className="bannerLeft">
              <h1 className="bannerLeft__title">
                We Are Digital Product Design Agency
              </h1>
              <p className="bannerLeft__summry">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div>
                <button className="btn btn--modifair">Contact Us</button>
              </div>
            </div>
            <div className="bannerRight">
              <picture>
                <img src={Banner} alt={Banner} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default banner;
