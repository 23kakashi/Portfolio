import React from "react";
import { animateScroll as scroll } from "react-scroll";
import classes from "../styles/Navbar.module.css";
import Button from "../UI/Button";

const Navbar = ({ gotoProject }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToContact = () => {
    scroll.scrollToBottom();
  };
  return (
    // <nav className={classes.nav_container}>
    <div className={classes.navbar} id="top">
      <div className={classes.logo} onClick={scrollToTop}>
        <img className={classes.logo_img} src="/logo.png" alt="" />
        <p>Tapish Sharma</p>
      </div>
      <div className={classes.link}>
        <a
          className={classes.resume}
          href="https://drive.google.com/file/d/16kNnGQlJ7IxASqcVqr-IuyTB0Qqh2kwL/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <p>Resume</p>
        </a>
        <p onClick={scrollToContact}>Contact</p>

        <span onClick={gotoProject}>
          <Button text="Work" />
        </span>
      </div>
    </div>
    // </nav>
  );
};

export default Navbar;
