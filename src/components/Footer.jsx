import React from "react";
import classes from "../styles/Footer.module.css";
import { animateScroll as scroll } from "react-scroll";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_container}>
        <div className={classes.logo} onClick={() => scroll.scrollToTop()}>
          <img className={classes.logo_img} src="/logo.png" alt="" />
        </div>
        <div className={classes.link}>
          <a href="https://www.linkedin.com/in/tapish23/">
            <p>LinkedIn</p>
          </a>
          <a href="https://github.com/kakashi10-23">
            <p>Github</p>
          </a>

          <p onClick={() => scroll.scrollToTop()}>About</p>

          {/* <a href="/"><p>Contact</p></a> */}
        </div>
      </div>
      <div className={classes.footer_quote}>
        Made By Tapish Sharma - Code it out!
      </div>
    </footer>
  );
};

export default Footer;
