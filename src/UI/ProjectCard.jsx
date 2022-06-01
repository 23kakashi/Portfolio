import React from "react";
import classes from "../styles/Project.module.css";

const ProjectCard = ({ id, title, desc, netlify, git, resp, img }) => {
  return (
    <div className={classes.project}>
      <div className={classes.pcontainer}>
        <div className={classes.title}>
          <h1>{id}. {title}</h1>
        </div>
        <div className={classes.content}>
          <div className={classes.desc}>
            <p>{desc}</p>
          </div>
          <div className={classes.resp}>
            <p>{resp}</p>
          </div>
        </div>
        <div className={classes.img}>
          <img width="100%" src={img} alt="alt text" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
