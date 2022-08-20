import React, { useState } from "react";
import classes from "../styles/Connect.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Connect = () => {
  const [text, setText] = useState("Submit");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const notify = (msg) => toast(msg);
  const changeHandler = (value, name) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setText("Sending....");
    emailjs
      .send("service_ja8sav8", "template_gwivao7", form, "7D-uWOaR7frDtgFeG")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          notify("Mail Sent. Will Connect with you shortly")
        },
        function (error) {
          console.log("FAILED...", error);
          notify("Server is down, Please use LinkedIn")
        }
      );
    setText("send");
  };
  return (
    <>
      <ToastContainer />
      <section className={classes.connect_section} id="contact">
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
              <Button type="submit" text={text} />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
