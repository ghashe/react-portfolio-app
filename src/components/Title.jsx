import React from "react";

import Profile from "../assets/images/title/my_profile_pic.jpg";
import "../styles/Title.css";

function Title() {
  return (
    <div className="cont ">
      <div className="profile">
        <img src={Profile} alt="" />
      </div>
    </div>
  );
}

export default Title;
