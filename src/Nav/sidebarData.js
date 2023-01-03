import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
   {
      title: "home",
      path: "/home",
      icon:<AiIcons.AiFillHome className="nav-icon"/>,
      cName: "nav-text"
   },
   {
      title: "friends",
      path: "/",
      icon:<FaIcons.FaPaw className="nav-icon"/>,
      cName: "nav-text"
   },
   {
      title: "messages",
      path: "/messages",
      icon:<IoIcons.IoMdChatbubbles className="nav-icon"/>,
      cName: "nav-text"
   },
   {
      title: "newPost",
      path: "/newPost",
      icon:<AiIcons.AiFillPlusCircle className="nav-icon"/>,
      cName: "nav-text"
   },
   {
      title: "logout",
      path: "/logout",
      icon:<FiIcons.FiLogOut className="nav-icon"/>,
      cName: "nav-text"
   }
];