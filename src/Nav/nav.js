/* Made by Aashna 27/12/2022 */
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";
import { auth } from "../firebase-config";
import "./nav.css";
import { signOut } from "firebase/auth";

const Nav = () => {
  const log_user_out = () => {
    try {
      signOut(auth);
      localStorage.clear();
      alert("You have been logged out");
      window.location.reload();
    } catch (e) {
      alert("You already logged out");
    }
  };

  return (
    <>
      <nav>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <div className="profile ">
              <div className="pfp-info">
                <div className="outer-userPFP">
                  <img
                    className="userPFP "
                    src="https://media.tenor.com/1NRoxR1fXngAAAAi/hug-cat.gif"
                  />
                </div>

                <div className="username">@chonkychutney</div>
              </div>
            </div>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="nav-text">
            <Link onClick={log_user_out}>
              <FiIcons.FiLogOut className="nav-icon" />
              <span>logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
/*
const Logout = () => {
   const log_user_out =()=>{
       localStorage.clear()
       window.location.reload()
   }

   return (        
   <div className="logout-wrapper">
       <button className="logout-button" onClick={log_user_out}>Logout</button>
   </div>

   );
}
*/
