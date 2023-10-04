import React from "react";
import "./Header.css";
import logo from "../assets/logo-img/logo.png";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <>
    <div className="header">
      <div className="logo-img">
        <img src={logo} alt="" />
      </div>

      <div>
        <button className="lang_btn">English </button>
      </div>
     
    </div>
    <Hero/>
    </>
  );
};

export default Header;
