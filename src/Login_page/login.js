/* Made by Aashna, Amilesh, Neel 27/12/2022 */
import React, { useState, useEffect } from "react";
import { auth, provider } from "../firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");


  //variables for google auth
  const [value, setValue] = useState(null);
  const [name, setName] = useState("");


  //variables for email/password auth
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  //google auth function for sign in/sign up(does both bc its google idk)
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      setName(data.user.displayName);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("name", data.user.displayName);
      navigate("/forpaws/home");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
    console.log(value);
  });

  const logIn = async (e) => {
    e.preventDefault();
    try {
      setMessage(""); // rest error
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/forpaws/home");
      setMessage("logged in!!");

    } catch (error) {
      setMessage("failed to login");
    }

    setLoading(false);
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/forpaws/home");
      setMessage("account created");

    } catch (error) {
      setMessage("failed to create an account");
    }

    db.collection("users").add({
      username: username,
      firstName: firstName,
      lastName: lastName,
    });
    
    alert("Your account posted");

  setLoading(false);
  };

return (
  <>
    <header>
      <div className="header-items">
        <div><Link to="/forpaws"><AiIcons.AiFillHome className="nav-icon home" /></Link>
        </div><div></div>
        <h1>Forpaws</h1>
      </div>
    </header>

    <div id="login-page">
      <div className=" login-background">
        <div className="login">
          <h4>Login</h4>
          <p>{message}</p>
          <form className="login-form">
            <input
              className="entry"
              type="email"
              placeholder="email"
              defaultValue={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="entry"
              type="password"
              placeholder="password"
              defaultValue={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              className="light-btn"
              type="submit"
              value="LOGIN"
              onClick={logIn} />
          </form>
          <div className="extra-login-options">
            <div className="google-btn" onClick={handleClick} ><FaIcons.FaGoogle className="nav-icon" /></div>
            <div className="facebook-btn" onClick={handleClick} ><FaIcons.FaFacebookF className="nav-icon" /></div>
          </div>
        </div>

        <div className=" signup-background">
          <div className="signup">
            <h4>SignUp</h4>
            <p>{message}</p>
            <form className="signup-form">
              <div className="input-short">
                <input
                  className="entry"
                  type="text"
                  placeholder={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  />
                <input
                  className="entry"
                  type="text"
                  placeholder={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
              <input
                className="entry"
                type="text"
                placeholder="username"
                defaultValue={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <input
                className="entry"
                type="text"
                placeholder="email"
                defaultValue={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                className="entry"
                type="password"
                placeholder="password"
                defaultValue={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <input
                className="dark-btn"
                type="submit"
                defaultValue="SIGNUP"
                onClick={signUp}
              />
            </form>
            <div className="extra-login-options">
              <div className="google-btn" onClick={handleClick} ><FaIcons.FaGoogle className="nav-icon" /></div>
              <div className="facebook-btn" onClick={handleClick} ><FaIcons.FaFacebookF className="nav-icon" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
};

export default Login;
