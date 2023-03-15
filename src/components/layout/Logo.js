import React, { useContext } from "react";
import "./logo.scss";
import { AppContext } from "../../context/context";
const Logo = () => {
  const { goToSection } = useContext(AppContext);
  return (
    <a
      href='#home'
      className='logo'
      onClick={(e) => {
        goToSection(e, 80);
      }}
    >
      Dawid Ficek
    </a>
  );
};

export default Logo;
