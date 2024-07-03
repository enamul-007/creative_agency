import React from "react";
import "./Service.css";
import Heading from "../../commonComponent/Heading";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { MdCopyAll, MdDeveloperMode, MdDeveloperBoard } from "react-icons/md";
import { AiOutlineLayout } from "react-icons/ai";
import { PiBoundingBoxBold } from "react-icons/pi";

function Service() {
  const allservice = [
    {
      id: 1,
      icon: <BsLayoutTextSidebar />,
      title: "UI/UX Design",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      id: 2,
      icon: <MdDeveloperBoard />,
      title: "Web Development",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      id: 3,
      icon: <MdCopyAll />,
      title: "Digital Marketing",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      id: 4,
      icon: <AiOutlineLayout />,
      title: "Graphic Design",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      id: 5,
      icon: <MdDeveloperMode />,
      title: "Web Design",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      id: 1,
      icon: <PiBoundingBoxBold />,
      title: "Motion Design",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
  ];
  return (
    <>
      <div className="servicePart">
        <div className="container">
          <Heading
            title="Our Work Portfolio"
            description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`}
            className="serviceStyle"
          />
          <div className="serviceboxHolder">
            {allservice?.map((item) => (
              <div className="serviceBox" key={item.id}>
                <span className="service_icon">
                  {item.icon ? item.icon : "something is missing"}
                </span>
                <h2 className="service_title">
                  {item.title ? item.title : "something is missing"}
                </h2>
                <p className="service_summry">
                  {item.description ? item.description : "something is missing"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
