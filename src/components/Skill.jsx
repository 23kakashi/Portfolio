import React from "react";
import SkillCard from "../UI/SkillCard";
import { v4 as uuid } from "uuid";
import style from "styled-components";

const Div = style.div`
  padding-left: 20px;
`;

const Section = style.section`
  width: 50vw;
  margin: auto;
  `;

const H = style.h2`
  text-align: center;
  font-size: 22px
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
