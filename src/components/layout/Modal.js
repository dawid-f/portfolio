import React, { useContext } from "react";
import "./modal.scss";
import { AppContext } from "../../context/context";

const Modal = () => {
  const { modalActive, setModalActive } = useContext(AppContext);
  return (
    <section className={`${modalActive ? "modal modal-active" : "modal"}`}>
      <div className='modal-inner'>
        <p>
          Thank you, your message has been submitted. You'll receive an email
          confirmation shortly.
        </p>
        <button
          type='button'
          className='btn'
          onClick={() => setModalActive(false)}
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default Modal;
