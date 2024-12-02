import React, { useContext, useState } from 'react';
import '../../estilos/main/MainSection2.css';
import { ProyectosContext } from '../../context/proyectosContext';
import ProyectoCard from '../mini-componentes/proyectoCard';
import { motion } from 'framer-motion';

export default function MainSection2() {
  const { proyectos } = useContext(ProyectosContext);
  const [verMas, setVerMas] = useState(false);

  function manejarVerMas() {
    setVerMas(!verMas);
  }

  const proyectoMostrar = verMas ? proyectos : proyectos.slice(0, 4);

  return (
    <section id="main__sc2" className="main__section2">
      <h2>Proyectos</h2>
      <div className="main__section2-grilla">
        {proyectoMostrar.map((proyecto, index) => (
          <motion.div
            key={proyecto.id}
            className="proyecto-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Izquierda o derecha
            whileInView={{ opacity: 1, x: 0 }} // Visible en el viewport
            viewport={{ once: true, amount: 0.5 }} // Ejecutar una vez, al 50% visible
            transition={{ duration: 1, delay: index * 0.2 }} // Retraso escalonado
          >
            <ProyectoCard
              titulo={proyecto.title}
              imagen={proyecto.image}
              descripcion={proyecto.text}
              url={proyecto.url}
            />
          </motion.div>
        ))}
      </div>
      <button onClick={manejarVerMas} className="main__section2-button">
        {verMas ? 'Ver menos' : 'Ver más'}
      </button>
    </section>
  );
}
