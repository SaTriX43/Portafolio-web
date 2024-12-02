import { createContext, useState } from "react";

const TemaContext = createContext()

function TemaProvider({children}) {

  const [tema, setTema] = useState('dark')

  function cambiarTema() {
    setTema(tema === 'dark' ? 'light' : 'dark')
  }


  return (
    <TemaContext.Provider value={{tema , cambiarTema}}>
      {children}
    </TemaContext.Provider>
  )
}

export {TemaContext , TemaProvider}