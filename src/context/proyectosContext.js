import { createContext, useState } from "react";
import ProyectoEncuesta from "../assets/imagenes/Encuesta-calistenia.png";
import ProyectoClima from "../assets/imagenes/App-clima.png";
import ProyectoCatalogo from "../assets/imagenes/Catalogo-producto.png";
import ProyectoContactos from "../assets/imagenes/App-contact.png";
import CalisteniaCurso from "../assets/imagenes/Calistenia-curso.png";
import ConversionMondea from "../assets/imagenes/Conversion-moneda.png";
import InfoLibros from "../assets/imagenes/Info-libros.png";
import AppFinanzas from "../assets/imagenes/App-finanzas.png";
import AppMascota from "../assets/imagenes/AppMascota.png";
import AppCalistenia from "../assets/imagenes/App-Calistenia.png";

const ProyectosContext = createContext();

function ProyectosProvider({ children }) {
  const [proyectos] = useState([
    {
      id: 1,
      image: ProyectoEncuesta,
      title: "Cuestionario Calistenia",
      text: "En este proyecto me tomo 2 semanas en realizarlo conciste en un par de preguntas para saber que tanto sabes de calistenia",
      url: "https://satrix43.github.io/encuesta-dinamica-calistenia/",
      tecnologias: ['html','css','js','react']
    },
    // -------------------------------------------------------------------------------------------------
    {
      id: 2,
      image: AppCalistenia,
      title: "App Parques Calistenia",
      text: "Este proyecto implemento tanto Frontend como Backend y me tomo 1 mes desarrollarlo ",
      url: "https://app-calistenia.vercel.app/",
      tecnologias: ['html','css','js','react','next','node','express','postgresql']
    },
    // ---------------------------------------------------------------------------
    {
      id: 3,
      image: AppFinanzas,
      title: "App de Finanzas",
      text: "En este proyecto utilize una libreria de graficos e localStorage para almacenar la informacion me tomo 5 dias en desarrollarlo",
      url: "https://satrix43.github.io/App-finanzas/",
      tecnologias: ['html','css','js','react']
    },
    // ---------------------------------------------------------------------------
    {
      id: 4,
      image: AppMascota,
      title: "App de Mascotas",
      text: "En este proyecto puse en practica en redireccionamiendo y el localStorage",
      url: "https://satrix43.github.io/App-mascotas-inyecciones/#/",
      tecnologias: ['html','css','js','react']
    },
    // ---------------------------------------------------------------------------
    {
      id: 5,
      image: CalisteniaCurso,
      title: "Calistenia Curso",
      text: "Este proyecto es mas de diseño que de logica aplique los conocimiento de responsive design.",
      url: "https://satrix43.github.io/Calistenia-curso/",
      tecnologias: ['html','css','js','react']
    },
    // ---------------------------------------------------------------------------
    {
      id: 6,
      image: ConversionMondea,
      title: "Conversion de moneda",
      text: "En este proyecto solucione el problema de no saber el valor de la moneda en ciertos paises use una api de divisas",
      url: "https://satrix43.github.io/Conversion-moneda/",
      tecnologias: ['html','css','js','react']
    },
    // ---------------------------------------------------------------------------
    {
      id: 7,
      image: InfoLibros,
      title: "Informacion de libros",
      text: "En este proyecto es para los amantes de la lectura da un pequeño resumen de libros use una api de libros",
      url: "https://satrix43.github.io/Info-libros/",
      tecnologias: ['html','css','js','react']
    },
    // ---------------------------------------------------------------------------
    {
      id: 8,
      image: ProyectoClima,
      title: "App clima",
      text: "En este proyecto reforze el uso de api pedi informacion climatica dependiendo de ttu ciudad",
      url: "https://satrix43.github.io/App-clima/",
      tecnologias: ['html','css','js','react']
    },
    // ---------------------------------------------------------------------------
    {
      id: 9,
      image: ProyectoContactos,
      title: "App de Contactos",
      text: "En este proyecto use mas los principios de diseño y ciertas funciones de js me tomo 1 semana en desarrollarlo",
      url: "https://satrix43.github.io/App-contactos/",
      tecnologias: ['html','css','js','react']
    },
    // ----------------------------------------------------------------------------------------
    {
      id: 10,
      image: ProyectoCatalogo,
      title: "Catalogo de Productos",
      text: "En este proyecto interiorize como usar Api Rest me tomo 1 semana y media dearrollarlo",
      url: "https://satrix43.github.io/ecommers/",
      tecnologias: ['html','css','js','react']
    },
  ]);

  return (
    <ProyectosContext.Provider value={{ proyectos }}>
      {children}
    </ProyectosContext.Provider>
  );
}

export { ProyectosContext, ProyectosProvider };
