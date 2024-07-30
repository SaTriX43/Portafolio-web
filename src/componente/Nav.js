import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../estilos/Nav.css'
import { LanguajeContext } from "../context/languaje";

function Nav( { navActive } ) {

  const {text} = useContext(LanguajeContext)

  return(
    <nav className={`nav__pages ${navActive ? 'nav__pages-activo' : ''}`}>
        <ul className="pages__list">
          <li><Link className="pages__item" to='/'>{text.navTextHome}</Link></li>
          <hr className="nav__hr"/>
          <li><Link className="pages__item" to='/about'>{text.navTextAbout}</Link></li>
          <hr className="nav__hr"/>
          <li><Link className="pages__item" to='/portafolio' >{text.navTextPortofolio}</Link></li>
          <hr className="nav__hr"/>
          <li><Link className="pages__item" to='/contact'>{text.navTextContact}</Link></li>
          <hr className="nav__hr"/>
        </ul>
      </nav>
  )
}


export default Nav