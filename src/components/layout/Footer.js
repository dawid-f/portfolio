import React from "react";
import "./footer.scss";
import { AiTwotoneHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-inner'>
        Made with <AiTwotoneHeart className='heart-icon' /> by DF.
      </div>
    </footer>
  );
};

export default Footer;
