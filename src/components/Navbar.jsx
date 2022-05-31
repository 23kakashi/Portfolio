import React from "react";
import classes from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    // <nav className={classes.nav_container}>
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img className={classes.logo_img} src="/logo.png" alt="" />
        <p>Tapish Sharma</p>
      </div>
      <div className={classes.link}>
        <p>About</p>
        <p>Contact</p>
        <p>View Work</p>
      </div>
    </div>
    // </nav>
  );
};

export default Navbar;
