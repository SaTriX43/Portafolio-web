import React from 'react'
import '../../estilos/mini-componentes/proyectoCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Referencia from '../../assets/imagenes/AppMascota.png'

export default function ProyectoCard({titulo , imagen , descripcion, url}) {
  return (
    <div className='main__proyectocard'>
      <div className='main__proyectocard-container-img'>
        <img src={imagen} alt="" className='img-proyecto'/>
      </div>
      
      <div className='main__proyectocard-container-info'>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <a target='_blank' href={url}>Ver Proyecto</a>
        <div className='main__proyectocard-container-info-tecnologias'>
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
        </div>
      </div>
    </div>
  )
}
