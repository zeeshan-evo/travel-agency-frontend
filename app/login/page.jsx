/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import styles from "./page.module.css";

const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Welcome Back</h1>
          <p>Welcome to Tavel Buddy! Sign In to continue</p>
        </div>
        <div className={styles.inputSocial}>
          <FcGoogle className={styles.socialIcon} />
          <FaFacebookF className={styles.socialIcon} />
        </div>

        <span className={styles.spanText}>Or Sign In with</span>

        <div className={styles.inputDiv}>
          <div className={styles.inputItems}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className={styles.inputItem}
            />
          </div>
          <div className={styles.inputItems}>
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className={styles.inputItem}
            />
          </div>
          <p className={styles.inputText}>
            <Link href="#">Forgot Password?</Link>
          </p>
          <button className={styles.inputButton}>Sign In</button>
          <p className={styles.bottomText}>
            Don't have an account ?{" "}
            <Link href="/signup" className={styles.inputText}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
