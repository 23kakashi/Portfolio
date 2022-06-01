import React from "react";
import classes from "../styles/Project.module.css";

const project = [
  {
    id: 1,
    title: "Cultfit Clone",
    desc: "",
    netlify: "https://charming-kleicha-f7531f.netlify.app/checkout.html",
    git: "https://github.com/ROY-AMAN/Cult-Fit-clone",
    resp: "",
  },
  {
    id: 2,
    title: "OverStock Clone",
    desc: "",
    netlify: "https://profound-praline-6eee04.netlify.app/cart.html ",
    git: "https://github.com/amananshul/Over_Stock_project",
    resp: "",
  },
  {
    id: 3,
    title: "Google Clock clone",
    desc: "",
    netlify: "https://incredible-figolla-9ff290.netlify.app/",
    git: "https://github.com/masai-course/tapish_fw16_560/tree/master/Unit%205/sprint-1/day-3/assignments",
    resp: "",
  },
  {
    id: 4,
    title: "Max Faxhion Clone",
    desc: "",
    netlify: "https://leafy-sorbet-dccc4d.netlify.app/",
    git: " https://github.com/kakashi10-23/Max-clone",
    resp: "",
  },
];

const Project = () => {
  return (
    <section className={classes.project}>
      <div className={classes.project_container}></div>
    </section>
  );
};

export default Project;

// https://charming-kleicha-f7531f.netlify.app/checkout.html   cultfit
// https://profound-praline-6eee04.netlify.app/cart.html       overstock
// https://leafy-sorbet-dccc4d.netlify.app/                     maxfashion
