import React from "react";
import "./Header.css";
import { Anchor } from "antd";
const { Link } = Anchor;

const Header = () => {
  
  return (
    
    <div className="container">
      {/* <div className="name">Johnny Rangel |</div> */}
      <div className="right-side">Hire Me ➔</div>
      <Anchor offsetTop='55'>
        <Link className="top-info" href="#About" title="About |" />
        <Link className="top-info" href="#Past-work" title="Past-work |" />
        <Link className="top-info" href="#Skills" title="Skills " />
      </Anchor>
    </div>
  );
};

export default Header;
