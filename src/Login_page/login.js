/* Made by Aashna, Amilesh, Neel 27/12/2022 */
import React, { useState, useEffect } from "react";
import { auth, provider } from "../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
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
            <div><Link to="/"><AiIcons.AiFillHome className="nav-icon home" /></Link>
            </div><div></div>
            <h1>Forpaws</h1>
          </div>
        </header>

        <div id="login-page">
          <div className=" login-background">
            <div className="login" onSubmit={signUp}>
              <h4>Login</h4>
              <form className="login-form">
                <input
                  type="text"
                  placeholder="username"
                  defaultValue={username}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="email"
                  defaultValue={email}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input className="light-btn" type="submit" value="LOGIN" />
              </form>
              <div className="extra-login-options">
                <div className="google-btn" onClick={handleClick} ><FaIcons.FaGoogle className="nav-icon" /></div>
                <div className="google-btn" onClick={handleClick} ><FaIcons.FaFacebookF className="nav-icon" /></div>
              </div>
            </div>

            <div className=" signup-background">
              <div className="signup">
                <h4>SignUp</h4>
                <form className="signup-form">
                  <div className="input-short"><input
                    type="text"
                    placeholder="firstname"
                  />
                    <input
                      type="text"
                      placeholder="lastname"
                    /></div>
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
                    type="text"
                    placeholder="password"
                    defaultValue={email}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="dark-btn"
                    type="submit"
                    value="SIGNUP"
                  />
                </form>
                <div className="extra-login-options">
                  <div className="google-btn" onClick={handleClick} ><FaIcons.FaGoogle className="nav-icon" /></div>
                  <div className="google-btn" onClick={handleClick} ><FaIcons.FaFacebookF className="nav-icon" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
