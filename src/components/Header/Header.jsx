import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import moment from "moment";
const Header = () => {
  return (
    <div className="header">
      <div >
        <img src={logo} alt="" />{" "}
      </div>
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM D YYYY ")}</p>
    </div>
  );
};

export default Header;
