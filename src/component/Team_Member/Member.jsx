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
        
        </div>
      </div>
    </>
  );
};

export default Member;
