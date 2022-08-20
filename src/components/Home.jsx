import React, { useRef } from "react";
import classes from "../styles/Home.module.css";
import Connect from "./Connect";
import Skill from "./Skill";
import About from "./About";
import Project from "./Project";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <>
      <Navbar gotoProject={executeScroll}/>
      <section className={classes.Main_container} id="top">
        <div className={classes.container}>
          <div className={classes.intro}>
            <div className={classes.avatar}>
              <img src="/avatar.png" alt="avatar" />
            </div>
            <div className={classes.aboutme}>
              <h1>Hi there!</h1>
              <p>
                <span className={classes.developer}>Full-Stack Web Developer</span> Fuelled by a passion for designing
                compelling products, I have a deep desire to excel and
                continuously improve in my work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Skill />
      <Project myref={myRef}/>
      <Connect />
      <Footer />
    </>
  );
};

export default Home;
