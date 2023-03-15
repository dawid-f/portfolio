import React, { useContext } from "react";
import "./home.scss";
import HomeSVG from "../assets/images/home.svg";
import { AppContext } from "../context/context";

const Home = () => {
  const { goToSection } = useContext(AppContext);
  return (
    <section className='hero section'>
      <article className='hero-inner section-center'>
        <div className='hero-text'>
          <p className='intro'>Hi, my name is</p>
          <h1 className='page-title'>Dawid Ficek.</h1>
          <p className='page-subtitle'>
            Self-taught front-end developer with a passion for building websites
            and web applications.
          </p>
          <a href='#projects' onClick={goToSection} className='btn'>
            Portfolio
          </a>
        </div>
        <div className='hero-img'>
          <img
            src={HomeSVG}
            alt='Illustration of a Web Developer working on a laptop'
          />
        </div>
      </article>
    </section>
  );
};

export default Home;
