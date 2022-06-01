import React from "react";
import style from "styled-components";

const Card = style.div`
  display:inline-block;
  background-color: #EEEFF1;
  borderRadius: 8px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 1px solid #ced1df;
  border-radius: 8px;
  background-color: #eeeff1;
  margin: 10px;
  padding: 10px; 

`;
const SkillCard = ({ text }) => {
  return <Card>{text}</Card>;
};

export default SkillCard;
