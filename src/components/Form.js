import React, { useRef, useContext } from "react";
import "./form.scss";
import emailjs from "@emailjs/browser";
import { AppContext } from "../context/context";

const Form = () => {
  const { setModalActive } = useContext(AppContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        e.target.reset();
        setModalActive(true);
      });
  };

  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <label htmlFor='user_name'>Your name</label>
      <input
        type='text'
        name='user_name'
        id='user_name'
        className='form-input'
        placeholder='Your Name'
        minLength={3}
        maxLength={50}
        required
      />
      <label htmlFor='user_email'>Your e-mail</label>
      <input
        type='email'
        name='user_email'
        id='user_email'
        className='form-input'
        placeholder='Your E-mail'
        maxLength={100}
        required
      />
      <label htmlFor='user_subject'>Your name</label>
      <input
        type='text'
        name='user_subject'
        id='user_subject'
        className='form-input'
        placeholder='Subject'
        minLength={3}
        maxLength={50}
        required
      />
      <label htmlFor='message'>Your Message</label>
      <textarea
        name='message'
        id='message'
        rows={10}
        cols={50}
        className='form-input'
        placeholder='Your Message'
        minLength={10}
        maxLength={1000}
        required
      />
      <button type='submit' value='submit' className='btn'>
        Submit
      </button>
    </form>
  );
};

export default Form;
