import React from "react";

const FooterItem = ({ title, list }) => {
  return (
    <>
      <div>
        <p className="footerTitle"> {title ? title : "title"} </p>
        <ul>
          {list?.map((listItem) => (
            <li>
              <a className="footerList" href="#">
                {listItem ? listItem : "eror"}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterItem;
