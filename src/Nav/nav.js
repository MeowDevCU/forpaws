/* Made by Aashna 27/12/2022 */
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";

import "./nav.css";

const Nav = () => {
   const [sidebar, setsidebar] = useState(false);
   const showSidebar = () => setsidebar(!sidebar);

   return (
      <>
         <div className="navbar">
            <Link to="#" className="menu-bars">
               <FaIcons.FaBars onClick={showSidebar} />
            </Link>
         </div>
         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
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
            </ul>
         </nav>
      </>
   );
};

export default Nav;
