/* Made by Aashna, Amilesh, Neel 27/12/2022 */
import React, { useState, useEffect } from "react";
import { auth, provider } from "../firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./login.css";

const Login = () => {
  return SignIn();

  function SignIn() {
    //variables for google auth
    const [value, setValue] = useState(null);
    const [name, setName] = useState("");

    //variables for email/password auth
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');



    //google auth function for sign in/sign up(does both bc its google idk)
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

    //sign up function for regular email and password
    /*const signUp = (event, email, password) => {
      event.preventDefault();
        console.log(email);
        console.log(password);
        createUserWithEmailAndPassword(auth, email, password)
        .catch((e) => alert(e.message));
    };
    */
    const signUp = async (e) => {
      e.preventDefault();
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
      }
      catch (error) {
        console.log(error.message);
      }
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
            <div className="login" onSubmit={signUp}>
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
                  placeholder="email"
                  defaultValue={password}
                  onChange={(event) => setPassword(event.target.value)}
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
                <form onSubmit={signUp} className="signup-form">
                  <div className="input-short">
                    <input
                      type="text"
                      placeholder="firstname"
                    />
                    <input
                      type="textbox"
                      placeholder="lastname"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="username"
                    defaultValue={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="email"
                    defaultValue={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <input
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
