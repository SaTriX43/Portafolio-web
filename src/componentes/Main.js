import React from 'react'
import MainSection1 from './main/MainSection1'
import '../estilos/Main.css'
import MainSection2 from './main/MainSection2'
import MainSection3 from './main/MainSection3'
import MainSection4 from './main/MainSection4'

export default function Main () {
  return (
    <main className='main'>
      <MainSection1/>
      <hr className='section__separadores'/>
      <MainSection2/>
      <hr className='section__separadores'/>
      <MainSection3/>
      <hr className='section__separadores'/>
      <MainSection4/>
      <hr className='section__separadores'/>
    </main>
  )
}
