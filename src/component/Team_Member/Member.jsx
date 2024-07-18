import React from "react";
import "./Member.css";
import Heading from "../../commonComponent/Heading";
import TeamMember1 from "../../assets/TeamMember1.png";
import TeamMember2 from "../../assets/TeamMember2.png";
import TeamMember3 from "../../assets/TeamMember3.png";

const Member = () => {
  const allMemberCard_part = [
    {
      id: 1,
      TeamMember1: TeamMember1,
      title: "Mahid Ahmed",
      description: `UX Designer`,
    },

    {
      id: 2,
      TeamMember1: TeamMember2,
      title: "Hasan Imam",
      description: `UI Designer`,
    },

    {
      id: 3,
      TeamMember1: TeamMember3,
      title: "Kazi Afia",
      description: `Digital Marketor`,
    },
  ];
  return (
    <>
      <div className="TeamMember_main_part">
        <div className="container">
          <div className="team">
            <Heading
              className="TeamMember_style"
              title={"Our Expert Team Member"}
              description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`}
            />
          </div>
          <div className="teamMember__main_part">
            {allMemberCard_part?.map((item) => (
              <div key={item.id} className="TeamMember_mainOverlay">
                <picture>
                  <img
                    className="img_part"
                    src={item.TeamMember1}
                    alt={item.TeamMember1}
                  />
                </picture>
                <div className="TeamMember_overlay">
                  <div className="overlay_containt">
                    <h6 className="Teamoverlay_title">{item.title}</h6>
                    <p className="Teamoverlay_summry">{item.description}</p>
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

export default Member;
