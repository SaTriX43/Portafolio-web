import React, { useContext, useState } from "react"
import '../estilos/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { TamanioContext } from "../context/tamanioContext"

export default function Header() {

  const [bars , setBars] = useState(false)
  const {esMobile} = useContext(TamanioContext)

  function manejarBars() {
    setBars(!bars)
  }

  function cerrarBars () {
    setBars(false)
  }

  return (
    <>
    {!esMobile ? (
      <header className="header">
        <nav className='header__nav'>
          <li className="header__nav-li"><a href="#main__sc1" className="header__nav-link">Acerca</a></li>
          <li className="header__nav-li"><a href="#main__sc2" className="header__nav-link">Proyectos</a></li>
          <li className="header__nav-li"><a href="#main__sc3" className="header__nav-link">Habilidades</a></li>
          <li className="header__nav-li"><a href="#main__sc4" className="header__nav-link">Contacto</a></li>
        </nav>
      </header>
    ) : (
      <>
        <header className="header">
          <FontAwesomeIcon
            icon={faBars}
            className="header__bars"
            onClick={manejarBars}
          />
        </header>
        <nav className={`header__nav ${bars ? 'nav-activo' : ''}`}>
          <li className="header__nav-li">
            <a href="#main__sc1" className="header__nav-link" onClick={cerrarBars}>Acerca</a>
          </li>

          <li className="header__nav-li">
            <a href="#main__sc2" className="header__nav-link" onClick={cerrarBars}>Proyectos</a>
          </li>

          <li className="header__nav-li">
            <a href="#main__sc3" className="header__nav-link" onClick={cerrarBars}>Habilidades</a>
          </li>

          <li className="header__nav-li">
            <a href="#main__sc4" className="header__nav-link" onClick={cerrarBars}>Contacto</a>
          </li>
        </nav>
       </>
    )}
    </>
  )
}
