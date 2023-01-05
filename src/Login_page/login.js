/* Made by Aashna, Amilesh, Neel 27/12/2022 */
import React, { useState, useEffect } from "react";
import Nav from "../Nav/nav.js";
import { auth, provider } from "../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Friends from "../Friends_page/friends";
import "./login.css";

const Login = () => {
  return SignIn();
  var user = getAuth().currentUser;
  if (user == null) {
  }
  function SignIn() {
    const [value, setValue] = useState(null);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleClick = () => {
      signInWithPopup(auth, provider).then((data) => {
        setValue(data.user.email);
        setName(data.user.displayName);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("name", data.user.displayName);
      });
    };
    useEffect(() => {
      setValue(localStorage.getItem("email"));
      console.log(value);
    });

    const signUp = (event, email, password) => {
      event.preventDefault();
      auth
        .creatUserWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message));
    };

    return (
      <>
        <Nav />
        <div className="gradient-border login-border">
          <Link to="/">
            <span>friends</span>
          </Link>
          <div className="internal login-border-white">
            <div className="login">
              <h3>Login</h3>
              {value ? (
                <></>
              ) : (
                <button className="google-btn" onClick={handleClick}>
                  Sign In With Google
                </button>
              )}
              <h3>You are {value ? "logged in" : "not logged in"}</h3>
              <br />
              <h3>Sign Up</h3>
              <form>
                <input
                  type="text"
                  placeholder="username"
                  defaultValue={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="email"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="password"
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={signUp}>
                  sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
