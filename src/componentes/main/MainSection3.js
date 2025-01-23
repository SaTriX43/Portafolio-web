import { faCss, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import IconoNextJs from '../../assets/imagenes/nextjs-icon-svgrepo-com.svg'
import IconoTalwind from '../../assets/imagenes/tailwind-css-2.svg'
import IconoExpress from '../../assets/imagenes/express.svg'
import IconoPostgresql from '../../assets/imagenes/postgresql.svg'
import '../../estilos/main/MainSection3.css'

export default function MainSection3() {
  return (
    <section id='main__sc3' className='main__section3'>
      <h2>Habilidades</h2>
      <div className='main__section3-container'>
        <div className='main__section3-cotainer-frontend'>
          <FontAwesomeIcon
            icon={faHtml5}
            id='html'
          />
          <FontAwesomeIcon
            icon={faCss}
            id='css'
          />
          <FontAwesomeIcon
            icon={faJs}
            id='js'
          />
          <FontAwesomeIcon
            icon={faReact}
            id='react'
          />
          <img src={IconoNextJs} id='next-js' width={50} alt=""/>
          <img src={IconoTalwind} id='talwind' width={50} alt=""/>
        </div>
        <div className='main__section3-backend'>
          <FontAwesomeIcon
            icon={faNodeJs}
            id='node'
          />
          <img src={IconoExpress} id='express' width={50} alt=""/>
          <img src={IconoPostgresql} id='posgresql' width={50} alt=""/>
        </div>
      </div>
    </section>
  );
}
