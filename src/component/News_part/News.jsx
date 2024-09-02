import React from "react";
import "./News.css";
import Heading from "../../commonComponent/Heading";
import news_img1 from "../../assets/news_img1.png";
import { CiUser } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";
import news_img2 from "../../assets/news_img2.png";
import news_img3 from "../../assets/news_img3.png";

const News = () => {
  const allNewscard_part = [
    {
      id: 1,
      news_img1: news_img1,
      Admin: "Admin",
      date: "07/11/2021",
      title: " Business Plans That Fit Your Best Blog",
      description: `There are many variations of passages of Lorem Ipsum , but
                    the majority have suffered alteration in some form.`,
      newsBtn: " Learn More",
      usericon: <CiUser />,
      dateIcon: <MdCalendarMonth />,
    },
    {
      id: 2,
      news_img1: news_img2,
      Admin: "Admin",
      date: "07/11/2021",
      title: " Business Plans That Fit Your Best Blog",
      description: `There are many variations of passages of Lorem Ipsum , but
                    the majority have suffered alteration in some form.`,
      newsBtn: " Learn More",
      usericon: <CiUser />,
      dateIcon: <MdCalendarMonth />,
    },
    {
      id: 3,
      news_img1: news_img3,
      Admin: "Admin",
      date: "07/11/2021",
      title: " Business Plans That Fit Your Best Blog",
      description: `There are many variations of passages of Lorem Ipsum , but
                    the majority have suffered alteration in some form.`,
      newsBtn: " Learn More",
      usericon: <CiUser />,
      dateIcon: <MdCalendarMonth />,
    },
  ];
  return (
    <div className="HeadingMain">
      <div className="container">
        <div>
          <div>
            <Heading
              className="NewsPartHeading_style"
              title={"Our Letest News"}
              description={
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
              }
            />
          </div>
            <div className="AllCard">
              {allNewscard_part?.map((item) => (
                <div key={item.id} className="headingCard_part">
                  <div>
                    <img
                      className="headingCard_img"
                      src={item.news_img1}
                      alt={item.news_img1}
                    />
                  </div>
                  <div>
                    <div className="user_date">
                      <div className="user_left">
                        <span className="NewsCard_icon"> {item.usericon} </span>
                        <p>{item.Admin}</p>
                      </div>
                      <div className="user_right">
                        <span className="NewsCard_icon"> {item.dateIcon} </span>
                        <p>{item.date}</p>
                      </div>
                    </div>
                    <h2 className="card_title">{item.title}</h2>
                    <p className="card_summry">{item.description}</p>
                    <a className="card_btn" href="#">
                      {item.newsBtn}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default News;
