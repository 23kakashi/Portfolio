import React from "react";
import classes from "../styles/Project.module.css";
import ProjectCard from "../UI/ProjectCard";

const project = [
  {
    id: 1,
    title: "Cultfit Clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque deserunt assumenda possimus beatae velit perspiciatis distinctio obcaecati pariatur est!",
    netlify: "https://charming-kleicha-f7531f.netlify.app/checkout.html",
    git: "https://github.com/ROY-AMAN/Cult-Fit-clone",
    resp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque deserunt assumenda possimus beatae velit perspiciatis distinctio obcaecati pariatur est!",
    img: "/cult1.png",
  },
  {
    id: 2,
    title: "OverStock Clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque deserunt assumenda possimus beatae velit perspiciatis distinctio obcaecati pariatur est!",
    netlify: "https://profound-praline-6eee04.netlify.app/cart.html ",
    git: "https://github.com/amananshul/Over_Stock_project",
    resp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque deserunt assumenda possimus beatae velit perspiciatis distinctio obcaecati pariatur est!",
    img: "/overstock1.png",
  },
  {
    id: 3,
    title: "Google Clock clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque deserunt assumenda possimus beatae velit perspiciatis distinctio obcaecati pariatur est!",
    netlify: "https://incredible-figolla-9ff290.netlify.app/",
    git: "https://github.com/masai-course/tapish_fw16_560/tree/master/Unit%205/sprint-1/day-3/assignments",
    resp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque deserunt assumenda possimus beatae velit perspiciatis distinctio obcaecati pariatur est!",
    img: "/clock.png",
  },
  {
    id: 4,
    title: "Max Faxhion Clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque deserunt assumenda possimus beatae velit perspiciatis distinctio obcaecati pariatur est!",
    netlify: "https://leafy-sorbet-dccc4d.netlify.app/",
    git: " https://github.com/kakashi10-23/Max-clone",
    resp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque deserunt assumenda possimus beatae velit perspiciatis distinctio obcaecati pariatur est!",
    img: "/max1.png",
  },
];

const Project = () => {
  return (
    <section className={classes.project}>
      <div className={classes.project_container}>
        {project.map(({ id, title, desc, netlify, git, resp, img }) => (
          <ProjectCard
            key={id}
            id={id}
            title={title}
            desc={desc}
            netlify={netlify}
            git={git}
            resp={resp}
            img={img}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;

// https://charming-kleicha-f7531f.netlify.app/checkout.html   cultfit
// https://profound-praline-6eee04.netlify.app/cart.html       overstock
// https://leafy-sorbet-dccc4d.netlify.app/                     maxfashion
