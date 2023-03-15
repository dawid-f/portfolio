import React from "react";
import "./projects.scss";
import { Header } from "./index";
import { projects } from "../utils/projects";

const Projects = () => {
  return (
    <section className='projects section'>
      <article className='projects-inner section-center'>
        <Header cl='projects' title='projects' sub="that i've made" />
        {projects.map(
          ({
            id,
            name,
            description,
            stack,
            img,
            siteUrl,
            gitUrl,
            siteIcon,
            gitIcon,
            cl,
          }) => {
            return (
              <article key={id} className='project'>
                <div className={`project-description ${cl}`}>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <div className='project-stack'>
                    {stack.map((item) => {
                      let id =
                        Date.now().toString(36) + Math.random().toString(36);
                      return (
                        <p key={id} className='stack-item'>
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className='project-images'>
                  <div className='overlay'>
                    <a href={siteUrl} target={"_blank"} rel={"noreferrer"}>
                      {siteIcon}
                      <p>Live Site</p>
                    </a>
                    <a href={gitUrl} target={"_blank"} rel={"noreferrer"}>
                      {gitIcon}
                      <p>Source Code</p>
                    </a>
                  </div>
                  <div className='project-img'>
                    <img src={img} alt={name} />
                  </div>
                </div>
              </article>
            );
          }
        )}
      </article>
    </section>
  );
};

export default Projects;
