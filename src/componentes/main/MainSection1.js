import MiFoto from '../../assets/imagenes/foto1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile} from '@fortawesome/free-solid-svg-icons'
import '../../estilos/main/MainSection1.css'
import CV from '../../assets/documentos/CV.pdf'
import { motion } from 'framer-motion'

export default function MainSection1() {

  function openLink(url) {
    window.open(url, '_blank','noopener,noreferrer')
  }

  return (
    <section id='main__sc1' className='main__section1'>
      <div className='main__section1-container-info'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="typing-effect"
        >
          Hola, soy Santiago
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Un desarrollador web Frontend apasionado por crear interfaces modernas, elegantes
          y funcionales. Me especializo en transformar ideas en experiencias digitales
          intuitivas utilizando tecnologías como React, Next.js y TailwindCSS. Mi objetivo es
          construir soluciones atractivas que conecten con los usuarios y aporten valor.
        </motion.p>
        <motion.div
          className="main__section1-container-redes"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="redes__icons"
            onClick={() => openLink('https://github.com/SaTriX43')}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="redes__icons"
            onClick={() =>
              openLink(
                'https://www.linkedin.com/in/santiago-andr%C3%A9s-gonz%C3%A1les-freire-507b202a2/'
              )
            }
          />
          <a href={CV} download>
            <FontAwesomeIcon icon={faFile} className="redes__icons" />
          </a>
        </motion.div>
      </div>
      
      
      <motion.div
        className="main__section1-container-img"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={MiFoto} alt="Imagen de Santiago" className="img" />
      </motion.div>
    </section>
  )
}
