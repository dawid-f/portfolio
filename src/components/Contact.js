import React, { useContext } from "react";
import "./contact.scss";
import { Header, Form } from "./index";
import { MdAlternateEmail } from "react-icons/md";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { AppContext } from "../context/context";

const Contact = () => {
  const { setModalActive } = useContext(AppContext);
  return (
    <section className='contact section'>
      <article className='contact-inner section-center'>
        <Header cl='contact' title='contact' sub="let's get in touch!" />
        <div className='contact-content'>
          <div className='contact-details'>
            <a
              href='mailto:dawidficek@tutamail.com'
              target={"_blank"}
              rel={"noreferrer"}
            >
              <i>
                <MdAlternateEmail />
              </i>
              dawidficek@tutamail.com
            </a>
            <a
              href='https://linkedin.com/in/dawid-ficek-4244951a9'
              target={"_blank"}
              rel={"noreferrer"}
            >
              <i>
                <ImLinkedin2 />
              </i>
              Dawid Ficek
            </a>

            <a
              href='https://github.com/dawid-f'
              target={"_blank"}
              rel={"noreferrer"}
            >
              <i>
                <AiFillGithub />
              </i>
              dawid-f
            </a>
          </div>
          <Form setModalActive={setModalActive} />
        </div>
      </article>
    </section>
  );
};

export default Contact;
