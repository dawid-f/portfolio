import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const links = [
  {
    id: 0,
    name: "home",
    url: "#home",
    icon: <AiFillHome />,
    navCl: "link-active nav-link",
    menuCl: "menu-link-active menu-link",
  },
  {
    id: 1,
    name: "about",
    url: "#about",
    icon: <FaUserAlt />,
    navCl: "nav-link",
    menuCl: "menu-link",
  },
  {
    id: 2,
    name: "projects",
    url: "#projects",
    icon: <BsFillBriefcaseFill />,
    navCl: "nav-link",
    menuCl: "menu-link",
  },
  {
    id: 3,
    name: "contact",
    url: "#contact",
    icon: <HiMail />,
    navCl: "nav-link",
    menuCl: "menu-link",
  },
];
