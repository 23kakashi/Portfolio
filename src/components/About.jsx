import React from "react";
import classes from "../styles/About.module.css";
const About = () => {
  return (
    <section className={classes.about} id="about">
      <div className={classes.about_container}>
        <div className={classes.know}>
          <p>KNOW</p>
          <p>ABOUT</p>
          <p>Me!</p>
        </div>
        <div className={classes.aboutme}>
          <p>
            I'm Tapish Sharma with Proficiency in MERN stack. Passion for
            website design that provides a seamless user experience. I am
            looking for an environment where I can bring my ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
