import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import '../estilos/Contact.css'
import { LanguajeContext } from "../context/languaje";
import { ThemeContext } from "../context/theme";

function Contact() {

  const {theme} = useContext(ThemeContext)
  const {text} = useContext(LanguajeContext)

  return(
    <section className="section__contact">
      <div className="container__contact-text">
        <h1>{text.ContactTitle}</h1>
        <p>{text.ContactText}</p>
      </div>
      <div className="container__contact-redes">
        <FontAwesomeIcon
          icon={faGithub}
          className="contact-icon"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="contact-icon"
        />
      </div>

      <hr className="separete-hr"/>

      <section className="section__contact-form">
        <h3>{text.ContactFormTitle}</h3>
        <form className="contact__form">

          <div className="container__contact-inputs">
            <label htmlFor="name">{text.ContactFormTextName}</label>
            <input type="text" id="name" className={`${theme === 'dark' ? 'input__dark-mode' : ''}`} required/>
          </div>

          {/* -------------------------------------------------------  */}
          <div className="container__contact-inputs">
            <label htmlFor="email">{text.ContactFormTextEmail}</label>
            <input type="email" id="email" className={`${theme === 'dark' ? 'input__dark-mode' : ''}`} required/>
          </div>

          {/* ----------------------------------------------------  */}
          <div className="container__contact-inputs">
            <label htmlFor="Message">{text.ContactFormTextMessage}</label>
            <textarea className={`textarea ${theme === 'dark' ? 'input__dark-mode' : ''}`}  id="Message"/>
          </div>

          <button className={`contact__button-form ${theme === 'dark' ? 'contact__button-form-dark-mode' : ''}`}>{text.ContactFormTextButton}</button>

        </form>
        
      </section>
    </section>
  )
}

export default Contact