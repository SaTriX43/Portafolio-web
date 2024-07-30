import React, { useContext, useState } from "react";
import '../estilos/Footer.css'
import { Link, useActionData } from "react-router-dom";
import { ThemeContext } from "../context/theme";

function Footer() {

  const {theme} = useContext(ThemeContext)

  function handleButtonUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  

  return(
    <footer className={`footer ${theme === 'dark' ? 'footer__dark-mode' : ''}`}>
      <div className={`footer__button-up ${theme === 'dark' ? 'footer__button-up-dark-mode' : ''}`} onClick={handleButtonUp}>
        &gt;
      </div>
      <p className={`footer__text ${theme === 'dark' ? 'footer-text-dark-mode' : ''}`}><span>C</span> 2024 Santiago Gonzales</p>
      <nav className="footer__nav-redes">
        <ul className={`footer__lista-redes`}>
          <li><Link class={`footer__items-redes ${theme === 'dark' ? 'footer__items-redes-dark-mode' : ''}`} to='/'>Home</Link></li>
          <li><Link class={`footer__items-redes ${theme === 'dark' ? 'footer__items-redes-dark-mode' : ''}`} to='/about'>About</Link></li>
          <li><Link class={`footer__items-redes ${theme === 'dark' ? 'footer__items-redes-dark-mode' : ''}`} to='/portafolio'>portafolio</Link></li>
          <li><Link class={`footer__items-redes ${theme === 'dark' ? 'footer__items-redes-dark-mode' : ''}`} to='/contact'>contact</Link></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer