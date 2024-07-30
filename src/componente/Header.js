import React, { useContext, useState } from "react";
import CalisteniaLogo from '../imagenes/calistenia-logo.jpg'
import Nav from "./Nav";
import '../estilos/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faFile, faLanguage, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { LanguajeContext } from "../context/languaje";
import { ThemeContext } from "../context/theme";

function Header() {

  const {handleChangeLanguaje , text , languaje} = useContext(LanguajeContext)

  const {handleChangeTheme , theme} = useContext(ThemeContext)

  const [navActive , setNavActive] = useState(false)

  function handleNavActive() {
    setNavActive(!navActive)
  }

  return(
    <header className="header">
      <div className="header__container-icons-left">
        <div className="header__container-logo">
          <img
            alt=""
            src={CalisteniaLogo}
            className="header__logo"
          />
        </div>
        <div className="header__container-mode" onClick={handleChangeTheme}>
          <FontAwesomeIcon
            icon={faMoon}
            className={`header__icon-function mode ${theme === 'light' ? 'mode-active' : ''}`}
          />
          <FontAwesomeIcon
            icon={faSun}
            className={`header__icon-function mode ${theme === 'dark' ? 'mode-active' : ''}`}
          />
        </div>
        <div className="header__container-languaje">
          <FontAwesomeIcon
            icon={faLanguage}
            className="header__icon-function"
            onClick={handleChangeLanguaje}
          />
          <h3>{languaje === 'es' ? 'ES' : 'EN' }</h3>
        </div>
      </div>
      
      <Nav
        navActive = {navActive}
      />
      <div className="header__container-redes">
        <FontAwesomeIcon
          icon={faFile}
          className="header__icon-redes"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="header__icon-redes"
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="header__icon-redes"
        />
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="bars"
        onClick={handleNavActive}
      />
    </header>
  )
}

export default Header