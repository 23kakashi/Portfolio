import React from "react";
import classes from "../styles/UI.module.css"
const Button = ({ type, text }) => {
  return <button className={classes.button} type={type}>{text}</button>;
};

export default Button;
