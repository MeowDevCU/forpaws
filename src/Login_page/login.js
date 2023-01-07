/* Made by Aashna, Amilesh, Neel 27/12/2022 */
import "./login.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "./authContext";
import React, { useRef, useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const { signup } = useAuth();


  //variables for email/password auth
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');

  // Handles signup process //
  const signupSubmit = async (e) => {
    alert("attempting");
    e.preventDefault();

    try {
      setError(""); // rest error
      setLoading(true);
      await signup(email, password); // signup is a promise
      alert("account created");
    } catch {
      setError("failed to create an account");
    }

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
            <form className="login-form">
              <input
                type="text"
                placeholder="email"
                defaultValue={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="text"
                placeholder="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <input className="light-btn" type="submit" value="LOGIN" />
            </form>
            <div className="extra-login-options">
              <div className="google-btn"  ><FaIcons.FaGoogle className="nav-icon" /></div>
              <div className="google-btn"  ><FaIcons.FaFacebookF className="nav-icon" /></div>
            </div>
          </div>

          <div className=" signup-background">
            <div className="signup">
              <h4>SignUp</h4>
              {error}
              <form className="signup-form" onSubmit={signupSubmit}>
                <div className="input-short">
                  <input
                    type="text"
                    placeholder="firstname"
                  />
                  <input
                    type="text"
                    placeholder="lastname"
                  />
                </div>
                <input
                  type="text"
                  placeholder="username"
                />
                <input
                  type="text"
                  placeholder="email"
                  defaultValue={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  type="text"
                  placeholder="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <input
                  className="dark-btn"
                  type="submit"
                  disabled={loading}
                  defaultValue="SIGNUP"
                />
              </form>
              <div className="extra-login-options">
                <div className="google-btn"  ><FaIcons.FaGoogle className="nav-icon" /></div>
                <div className="google-btn"  ><FaIcons.FaFacebookF className="nav-icon" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
