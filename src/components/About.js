import React from "react";
import "./about.scss";
import { Header } from "./index";
import { logos } from "../utils/logos";
import AboutSVG from "../assets/images/about.svg";

const About = () => {
  return (
    <section className='about section'>
      <article className='about-inner section-center'>
        <Header cl='about' title='about me' sub="let's meet each other" />
        <div className='about-content'>
          <div className='about-img'>
            <img src={AboutSVG} alt='Illustration of Web Developer' />
          </div>
          <div className='about-text'>
            <p>
              I am a front end developer, who started out the journey of web
              development with JavaScript around 2.5 years ago.
            </p>
            <p>
              I enjoy working with VanillaJS and React.js because of their
              versatility, ease of use, and the vast community support. I have
              experience in building responsive, mobile-first, and user-friendly
              web applications that are optimized for speed and performance.
            </p>
            <p>
              I am excited to continue my journey in web development and to work
              on more challenging projects that push me beyond my limits.
            </p>
          </div>
        </div>
      </article>
      <div className='skills section-center'>
        <ul>
          {logos.map(({ id, url, cl }) => {
            return (
              <li className={cl} key={id}>
                <img
                  className='skill-logo'
                  src={url}
                  alt='Programming language logo'
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default About;
