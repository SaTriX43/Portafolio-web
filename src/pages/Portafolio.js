import React, { useContext } from "react";
import '../estilos/Portafolio.css'
import { ProyectsContext } from "../context/proyects";
import { LanguajeContext } from "../context/languaje";
import { ThemeContext } from "../context/theme";



function Portafolio() {
  const {theme} = useContext(ThemeContext)
  const {text} = useContext(LanguajeContext)
  const {proyects} = useContext(ProyectsContext)

  return(
    <section className="section__portafolio">
      <div className="container__portafolio-text">
        <h1>{text.PortofolioTextTitle}</h1>
        <h3>{text.PortofolioTextTitle2}</h3>
        <p>{text.PortofolioTextParagrah}</p>
      </div>

      <hr className="separete-hr"/>
      
      <section className="section__portafolio-proyects">
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
      </section>
    </section>
  )
}

export default Portafolio