import { createContext, useState } from "react";
import ProyectoEncuesta from '../imagenes/Encuesta-calistenia.png'
import ProyectoClima from '../imagenes/App-clima.png'
import ProyectoCatalogo from '../imagenes/Catalogo-producto.png'


const ProyectsContext = createContext()


function ProyectsProvider({children}) {

  
  const [proyects , setProyects] = useState([
    {id:1 , image:ProyectoEncuesta , title:'Test of Calisthenics' , text:'Calisthenics'},
    {id:2 , image:ProyectoCatalogo , title:'App Clima' , text:'UI design app'},
    {id:3 , image:ProyectoClima , title:'Product catalog' , text:'UI design'},
  ])

  return(
    <ProyectsContext.Provider value={{proyects}}>
      {children}
    </ProyectsContext.Provider>
  )
}


export {ProyectsContext  , ProyectsProvider}