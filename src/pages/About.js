import React, { useContext } from "react";
import Foto from '../imagenes/foto.png'
import '../estilos/About.css'
import Handstand from '../imagenes/handstand.jpg'
import Tuck from '../imagenes/tuck-advance.jpg'
import Perseverancia from '../imagenes/perseverancia.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faGithub, faHtml5, faJsSquare, faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { LanguajeContext } from "../context/languaje";


function About() {

  const {text} = useContext(LanguajeContext)

  return(
    <section className="section__about">
      {/* About  */}
      <div className="container__about">
        <div className="container__about-text">
          <h2>{text.aboutTextTitle}</h2>
          <p>{text.aboutTextParagrah1}</p>
          <p>{text.aboutTextParagrah2}</p>
        </div>
        <div className="container__about-image">
          <img
            src={Foto}
            alt=""
            className="about__image"
          />
        </div>
        <div className="container__about-buttons">
          <button className="about-buttons">
            <FontAwesomeIcon
              icon={faFile}
              className="about__button-icon"
            />
          </button>
          <button className="about-buttons">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="about__button-icon"
            />
          </button>
          <button className="about-buttons">
            <FontAwesomeIcon
              icon={faGithub}
              className="about__button-icon"
            />
          </button>
        </div>
      </div>

      <hr className="separete-hr"/> 

      <section className="section__about-education">
        <div className="container__about-education-text">
          <h3>{text.aboutEducationText}</h3>
          <p>{text.aboutEducationTextParagrah} </p>
        </div>
        <div className="container__about-education-image">
          <img
            src={Perseverancia}
            alt="imagen perseverancia"
            className="about-education-image"
          />
        </div>
      </section>


      <hr className="separete-hr"/>

      {/* Skill  */}

      <section className="section__about-skill">
        <h1>{text.aboutSkillTitle}</h1>
        <div className="container__about-skills">
          <FontAwesomeIcon
            icon={faHtml5}
            className="skills__about-icon html"
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            className="skills__about-icon css"
          />
          <FontAwesomeIcon
            icon={faJsSquare}
            className="skills__about-icon js"
          />
          <FontAwesomeIcon
            icon={faReact}
            className="skills__about-icon react"
          />
        </div>
      </section>
      
      <hr className="separete-hr"/>

      <section className="section__about-hobbie">
        <div className="container__about-hobbie-text">
          <h2>{text.aboutHobbieTextTitle}</h2>
          <p>{text.aboutHobbieTextParagrah}</p>
          <img
            src={Tuck}
            alt=""
            className="about__image-hobbie hobbie-img-1"
          />
        </div>
        <div className="container__about-hobbie-image">
          <img
            src={Handstand}
            alt=""
            className="about__image-hobbie"
          />
        </div>
      </section>

    </section>
  )
}

export default About