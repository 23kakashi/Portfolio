import React, { useState } from "react";
import classes from "../styles/Connect.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import emailjs from "emailjs-com";

const Connect = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (value, name) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .send("service_ja8sav8", "template_gwivao7", form, "7D-uWOaR7frDtgFeG")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <section className={classes.connect_section}>
      <div className={classes.container}>
        <div className={classes.connect_appeal}>Want to get in touch?</div>
        <div className={classes.form_container}>
          <form onSubmit={submitHandler}>
            <div className={classes.inputA}>
              <div>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  lable="Name"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  lable="Email Address"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div>
              <Input
                id="message"
                type="textarea"
                name="message"
                row="4"
                placeholder="Enter Your Message"
                lable="Message"
                onChange={changeHandler}
              />
            </div>
            <Button type="submit" text="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connect;
