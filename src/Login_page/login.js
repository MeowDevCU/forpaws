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
        <header>
          <div className="header-items">
            <Link to="/">
              home
            </Link>
            <div></div>
            <h1>Forpaws</h1>
          </div>
        </header>
        <div className=" login-background">


          <div className="login" onSubmit={signUp}>
            <h4>Login</h4>
            <form id="login-form">
              <input
                className="input-long"
                type="text"
                placeholder="username"
                defaultValue={username}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input-long"
                type="text"
                placeholder="email"
                defaultValue={email}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input className="dark-btn" type="submit" value="LOGIN" />
            </form>
            <div className="extra-login_-options">
              <button className="google-btn" onClick={handleClick} />
            </div>
          </div>

          <div className="signup">
            <h4>Sign Up</h4>
            <form id="login-form">
              <input
                className="input-short"
                type="text"
                placeholder="firstname"
              />
              <input
                className="input-short"
                type="text"
                placeholder="lastname"
              />
              <input
                className="input-long"
                type="text"
                placeholder="username"
                defaultValue={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="input-long"
                type="text"
                placeholder="password"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input-long"
                type="text"
                placeholder="password"
                defaultValue={email}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input className="dark-btn" type="submit" value="LOGIN" />
            </form>
            <div className="extra-login_-options">
              <button className="google-btn" onClick={handleClick} />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
