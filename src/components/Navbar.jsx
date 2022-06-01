import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import classes from "../styles/Navbar.module.css";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    scroll.scrollToTop();
    navigate("/");
  };

  const scrollToAbout = () => {
    scroll.scrollTo(600);
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
        <p onClick={scrollToAbout}>About</p>
        <p onClick={scrollToContact}>Contact</p>
        <NavLink to="/work">
          <Button text="Work" />
        </NavLink>
      </div>
    </div>
    // </nav>
  );
};

export default Navbar;
