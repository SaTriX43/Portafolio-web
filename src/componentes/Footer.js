import React from "react";
import "../estilos/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import CV from '../assets/documentos/CV.pdf'

export default function Footer() {

  function openLink(url) {
    window.open(url, '_blank','noopener,noreferrer')
  }

  return (
    <footer className="footer">
      <p>©Copyright Santiago Gonzales</p>
      <div className="footer__container-redes">
        <FontAwesomeIcon
            icon={faGithub}
            className='footer__icons-redes'
            onClick={() => openLink('https://github.com/SaTriX43')}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className='footer__icons-redes'
            onClick={() => openLink('https://www.linkedin.com/in/santiago-andr%C3%A9s-gonz%C3%A1les-freire-507b202a2/')}
          />
          <a href={CV} download>
            <FontAwesomeIcon
              icon={faFile}
              className="footer__icons-redes"
            />
          </a>
      </div>
    </footer>
  ) 
}
