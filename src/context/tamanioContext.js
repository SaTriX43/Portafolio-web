import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { createContext, useEffect, useState } from "react";

const TamanioContext = createContext()

function TamanioProvider({children}) {

  const [esMobile , setEsMobile] = useState(window.innerWidth <= 450 )

  useEffect(() => {

    const manejarResize = () => {
      setEsMobile(window.innerWidth <= 600)
    }

    window.addEventListener('resize',manejarResize)

    return() => {
      window.removeEventListener('resize',manejarResize)
    }
  },[])

  return (
    <TamanioContext.Provider value={{esMobile}}>
      {children}
    </TamanioContext.Provider>
  )
}

export {TamanioContext, TamanioProvider}