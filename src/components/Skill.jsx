import React from "react";
import SkillCard from "../UI/SkillCard";
import { v4 as uuid } from "uuid";
import style from "styled-components";

const Div = style.div`
  padding-left: 20px;

  @media (max-width: 899px) {
    padding-left: 00px;
  }
`;

const Section = style.section`
  width: 50vw;
  margin: auto;

  @media (max-width: 1100px) and (min-width: 900px) {
    width: 70vw
  }

  @media (max-width: 899px) {
    width: 95vw
  }
  `;

const H = style.h2`
  text-align: center;
  font-size: 22px

  @media (max-width: 899px) {
    font-size: 12px
  }
`;
const skills = [
  "JavaScript",
  "HTML/CSS",
  "React",
  "Redux",
  "TypeSript",
  "Tailwind",
  "Responsive Design",
  "NodeJs",
  "ExpressJS",
  "MongoDB",
  "Leadership",
  "Team Collaboration",
  "Mentoring",
  "Remote Working",
];

const Skill = () => {
  return (
    <Section id="skill">
      <H>
        <img
          src="\full-stack-development.gif"
          alt="skill"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </H>
      <Div>
        {skills.map((skill) => (
          <SkillCard key={uuid()} text={skill} />
        ))}
      </Div>
    </Section>
  );
};

export default Skill;
