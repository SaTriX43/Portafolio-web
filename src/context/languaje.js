import React, { createContext, useState } from "react";

const LanguajeContext = createContext()

const currentLanguaje = 'es'

const idioms = {
  es : {
    // ---------------------------- 
    // nav 
    navTextHome : 'Inicio',
    navTextAbout : 'Acerca',
    navTextContact : 'Contacto',
    navTextPortofolio : 'Portafolio',
    // ----------------------------
    // Home 
    homeTitleImage : 'Un poco de mi',
    homeTextImage : 'Me gusta la sensación de resolver un problema y mejorar en el proceso.',

    homeProyectsText : 'Alguno de mis Proyectos',
    // ------------------------------------------- 
    // About 
    aboutTextTitle : 'Acerca',
    aboutTextParagrah1 : 'Hola me llamo Santiago Gonzales. Y soy de Escuador',
    aboutTextParagrah2:'Me dedico al desarrollo de páginas web además de gustarme los deportes como el ciclismo y la calistenia.',


    aboutEducationText:'Educacion Autodidacta',
    aboutEducationTextParagrah:'No seguí una carrera ni pagué un solo curso, puse el esfuerzo y poniendo todo en práctica. Llevo 1 año de experiencia. Y mejorando',

    aboutSkillTitle : 'Habilidades',

    aboutHobbieTextTitle : 'Pasatiempo Calistenia',
    aboutHobbieTextParagrah : 'Me gusta aprender a controlar mi propio cuerpo para hacer cosas increíbles. Aparte de recibir el aire fresco del parque, me duelen las manos.',
    // -------------------------------------------------- 
    // Portofolio 
    PortofolioTextTitle : 'Portafolio',
    PortofolioTextTitle2 : 'Consulta mis últimos proyectos realizados con Foco y dedicacion',
    PortofolioTextParagrah : 'Hecho con React y con las mejores prácticas buscando siempre mejorar el código.',

    // ---------------------------------------- 
    // contact 
    ContactTitle : 'Contacto',
    ContactText : 'Echa un vistazo a mi repertorio de proyectos y consulta mi linkedin.',
    ContactFormTitle : 'Envíame un correo electrónico',
    ContactFormTextName : 'Nombre',
    ContactFormTextEmail : 'Correo Electronico',
    ContactFormTextMessage : 'Mensaje',
    ContactFormTextButton : 'Enviar un email'
  },

  en : {
     // ---------------------------- 
    // nav 
    navTextHome : 'Home',
    navTextAbout : 'About',
    navTextContact : 'Contact',
    navTextPortofolio : 'Portofolio',
    // ----------------------------
    // Home 
    homeTitleImage : 'A little of me',
    homeTextImage : 'I like the feeling of solving a problem and improving in the process.',

    homeProyectsText : 'Some of me Proyects',
    // ------------------------------------------- 
    // About 
    aboutTextTitle : 'About',
    aboutTextParagrah1 : 'Hello my name is Santiago Gonzales. I am from Ecuador',
    aboutTextParagrah2:'I am dedicated to developing web pages apart from liking sports such as cycling and calisthenics.',


    aboutEducationText:'Self-taught Education',
    aboutEducationTextParagrah:'I did not pursue a career nor did I pay for a single course, I put the effort into putting everything into practice, I have 1 year of experience and improving',

    aboutSkillTitle : 'Skills',

    aboutHobbieTextTitle : 'Hobbie calisthenic',
    aboutHobbieTextParagrah : 'I like to learn to control my own body to do incredible things. Apart from getting the fresh air of the park, my hands hurt.',
    // -------------------------------------------------- 
    // Portofolio 
    PortofolioTextTitle : 'Portofolio',
    PortofolioTextTitle2 : 'Check my latest projects carried out with focus',
    PortofolioTextParagrah : 'Made with React and with the best practices always seeking to improve the code.',

    // ---------------------------------------- 
    // contact 
    ContactTitle : 'Contact',
    ContactText : 'Take a look at my repertoire of projects and check my linkedin.',
    ContactFormTitle : 'Send me an email',
    ContactFormTextName : 'Name',
    ContactFormTextEmail : 'Email',
    ContactFormTextMessage : 'Message',
    ContactFormTextButton : 'Send email'
  }
}



function LanguajeProvider({children}) {

  let [languaje , setLanguaje] = useState(currentLanguaje)
  const [text , setText] = useState(idioms[languaje])

  function handleChangeLanguaje(e) {
    if(languaje === 'es') {
      languaje = 'en'
    }else {
      languaje = 'es'
    }
    setLanguaje(languaje)
    setText(idioms[languaje])
    console.log('cambiando idioma')
    console.log(languaje)
  }

  return(
    <LanguajeContext.Provider value={{handleChangeLanguaje , text , languaje}}>
      {children}
    </LanguajeContext.Provider>
  )
}


export {LanguajeContext , LanguajeProvider}