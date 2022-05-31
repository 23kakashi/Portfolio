import React from "react";
import classes from "../styles/Home.module.css";
import Connect from "./Connect";

const Home = () => {
  return (
    <>
      <section className={classes.Main_container}>
        <div className={classes.container}>
          <div className={classes.intro}>
            <div className={classes.avatar}>
              <img src="/avatar.png" alt="avatar" />
            </div>
            <div className={classes.aboutme}>
              <h1>Hi there!</h1>
              <p>
                Fuelled by a passion for designing compelling products, I have a
                deep desire to excel and continuously improve in my work. Learn
                more about my journey below.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Connect />
    </>
  );
};

export default Home;
