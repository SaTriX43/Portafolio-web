import React from 'react'
import '../../estilos/mini-componentes/proyectoCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import expressLogo from '../../assets/imagenes/express.svg'
import nextLogo from '../../assets/imagenes/nextjs-icon-svgrepo-com.svg'
import postgresqlLogo from '../../assets/imagenes/postgresql.svg'

export default function ProyectoCard({titulo , imagen , descripcion, url,tecnologias}) {
  const iconoTecnologias = {
    html : { icon: faHtml5, type: 'icon'},
    css : { icon: faCss, type: 'icon'},
    js: { icon: faJs, type: 'icon'},
    react: { icon: faReact, type: 'icon'},
    node: { icon: faNodeJs, type: 'icon'},
    express: { image: expressLogo, type:'image'},
    next: { image: nextLogo, type:'image'},
    postgresql: { image: postgresqlLogo, type:'image'},
  }
  return (
    <div className='main__proyectocard'>
      <div className='main__proyectocard-container-img'>
        <img src={imagen} alt="" className='img-proyecto'/>
      </div>
      
      <div className='main__proyectocard-container-info'>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <a target='_blank' href={url} rel="noreferrer">Ver Proyecto</a>
        <div className='main__proyectocard-container-info-tecnologias'>
        {tecnologias.map((tecnologia,index) =>  {
          const tecnologiaData = iconoTecnologias[tecnologia]
          return (
            <div key={index}>
              {tecnologiaData.type === 'icon' ? (
                <FontAwesomeIcon
                  icon={tecnologiaData.icon}
                  title={tecnologia.toUpperCase()}
                  className={tecnologia}
                 />  
              ): (
                <img 
                  src={tecnologiaData.image}
                  alt='tecnologia'
                  title={tecnologia.toUpperCase()}
                  className={tecnologia}
                />
              )}
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}
