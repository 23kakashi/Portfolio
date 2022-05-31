import React from "react";
import classes from "../styles/UI.module.css";
const Input = ({ type, placeholder, lable, id, name, row, onChange }) => {
  return name !== "message" ? (
    <>
      <div className={classes.lable}>{lable}</div>
      <input
        className={classes.input}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value, e.target.name)}
        required
      />
    </>
  ) : (
    <>
      <div className={classes.lable}>{lable}</div>
      <textarea
        className={classes.input}
        id={id}
        name={name}
        type={type}
        rows={row}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value, e.target.name)}
        required
      />
    </>
  );
};

export default Input;
