// import React from 'react'

// function ShopLogin() {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }

// export default ShopLogin
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";
function ShopLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(
        `${server}/shop/login-shop`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        toast.success("Login succesfull");
        navigate("/dashboard");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(err.response.data.message);
      });
  };

  return (
    <center>
      <div className={styles.loginContainer}>
        <h2>Shop Login</h2>
        <form action="#" method="post" onSubmit={handleSubmit}>
          <input
            type="email"
            id="username"
            name="username"
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

          <div className={styles.bottomContianer}>
            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <div className={styles.forgotPassword}>
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <button type="submit" className="bg-info bg-gradient">
            Login
          </button>

          <div className={styles.signUp}>
            <p>Not have an account</p>

            <Link to="/shop-create">Sign Up</Link>
          </div>
        </form>
      </div>
    </center>
  );
}

export default ShopLogin;

