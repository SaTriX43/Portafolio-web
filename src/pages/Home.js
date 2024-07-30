import React, { useContext } from "react";
import '../estilos/Home.css'
import Foto from '../imagenes/foto1.png'

import { ProyectsContext } from "../context/proyects";
import { LanguajeContext } from "../context/languaje";
import { ThemeContext } from "../context/theme";


function Main() {
  const {theme} = useContext(ThemeContext)
  const {text} = useContext(LanguajeContext)
  const {proyects} = useContext(ProyectsContext)

  return(
    <main className="main">
      {/* Apartado de la imagen  */}
      <section className="main__section-image">
        <div className="main__container-image">
          <img 
            src={Foto}
            alt=""
            className="image-perfil"
          />
        </div>

        <div className="main__container-image-info">
            <h3 className="main__title-image">{text.homeTitleImage}</h3>
            <p className="main__text-image">{text.homeTextImage}</p>
        </div>
      </section>

      {/* ------------------------------  */}
      {/* Apartado de la seccion de proyectos  */}
      <section className="main__section-proyects">
        <p>{text.homeProyectsText}</p>
        <div className="main__container-proyects">
          {proyects.map(proyect => (
            <article key={proyect.id} className={`main__article-proyect ${theme === 'dark' ? 'main__article-proyect-dark-mode' : ''}`}>
              <div className="main__container-proyect-image">
                <img
                  src={proyect.image}
                  alt={`Imagen de ${proyect.title}`}
                  className="image"
                />
              </div>
              <div className="main__container-proyect-text">
                <h3>{proyect.title}</h3>
                <p>{proyect.text}</p>
              </div>
          </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Main