// import React from 'react'

import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./SignUP.module.css";

import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const newform = new FormData();
    newform.append("file", avatar);
    newform.append("name", name);
    newform.append("email", email);
    newform.append("password", password);
    axios
      .post(`${server}/user/create-user`, newform, config)
      .then(() => {
        toast.success("Go and check your mail for activation");
        setName("");
        setEmail("")
        setPassword("")
        setAvatar()
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <>
      <center>
        <div
          className={styles.loginContainer}
          style={{ boxSizing: "content-box" }}
        >
          <h4>Register </h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="full_name"
              name="full_name"
              required
              placeholder="full Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              style={{ backgroundColor: "white", width: "100%", height: "10%" }}
            />

            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              style={{ backgroundColor: "white", width: "100%", height: "10%" }}
            />

            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              style={{ backgroundColor: "white", width: "100%", height: "10%" }}
            />
            <div className={styles.inputFile}>
              <label htmlFor="avatar">
                {" "}
                <RxAvatar className={styles.avataricon} />
              </label>
              <input
                type="file"
                name="avatar"
                id="file-input"
                onChange={(event) => {
                  handleFileInputChange(event);
                }}
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "10%",
                }}
                accept=".jpg,.jpeg,.png"
              />
            </div>

            <button type="submit" className="bg-info bg-gradient">
              Register
            </button>
            <div className={styles.signUp}>
              <p>Already have an account</p>

              <Link to="/login">Sign Ip</Link>
            </div>
          </form>
        </div>
      </center>
    </>
  );
}

export default SignUp;
{
  /* <div>
              <label htmlFor="avatar"></label>
              <div>
                <span className={styles.icon}>
                  {avatar ? (
                    <img src={URL.createObjectURL(avatar)} alt="avatar" />
                  ) : (
                    <RxAvatar className={styles.avataricon} />
                  )}
                </span>
                <label htmlFor="file-input">
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    className={styles.inputFile}
                    onChange={(event) => {
                      handleFileInputChange(event);
                    }}
                    accept=".jpg,.jpeg,.png"
                  />
                </label>
              </div>
            </div> */
}
