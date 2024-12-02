import { faCss, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import IconoNextJs from '../../assets/imagenes/nextjs-icon-svgrepo-com.svg'
import IconoTalwind from '../../assets/imagenes/tailwind-css-2.svg'
import '../../estilos/main/MainSection3.css'

export default function MainSection3() {
  return (
    <section id='main__sc3' className='main__section3'>
      <h2>Habilidades</h2>
      <div className='main__section3-container'>
        <FontAwesomeIcon
          icon={faHtml5}
        />
        <FontAwesomeIcon
          icon={faCss}
        />
        <FontAwesomeIcon
          icon={faJs}
        />
        <FontAwesomeIcon
          icon={faReact}
        />
        <img src={IconoNextJs} width={50} alt=""/>
        <img src={IconoTalwind} width={50} alt=""/>
      </div>
    </section>
  );
}
