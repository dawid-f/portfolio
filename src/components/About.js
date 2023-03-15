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
              development with JavaScript around 2.5 years ago. I always loved,
              and enjoyed using javascript, both vanilla and React.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              ex dignissimos cum sit hic ipsum, possimus non commodi sunt totam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              delectus voluptates recusandae amet ducimus autem.
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
