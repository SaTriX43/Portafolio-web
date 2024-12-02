import React, { useRef, useState } from 'react'
import '../../estilos/main/MainSection4.css'
import emailjs from '@emailjs/browser'
export default function MainSection4() {

  const refForm = useRef()
  const [sentMessage , setSentMessage] = useState(null)
  const [valueName , setValueName] = useState('')
  const [valueEmail , setValueEmail] = useState('')
  const [valueMessage , setValueMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const serviceId = 'service_brqiqrm';
    const templateId = 'template_ioi5fii'

    const apiKey = 'ga_fB0DaqdmfPFbjK'
    
    emailjs.sendForm(serviceId , templateId , refForm.current , apiKey)
    .then(response => {
        if(response.text === 'OK') {
          setSentMessage(true)
          setValueName('')
          setValueEmail('')
          setValueMessage('')
        }else {
          setSentMessage(false)
        } 


        setTimeout(()=> {
          setSentMessage(null)
        },5000)
      })
    .catch(err => {
        console.error(err);
        setSentMessage(false);
        setTimeout(() => {
          setSentMessage(null);
        }, 5000);
      });
  }


  return (
    <section id='main__sc4' className='main__section4'>
      <div className='main__section4-container-title'>
        <h2>Contacto</h2>
        <hr/>
        <p>No dude en ponerse en contacto conmigo enviando el siguiente formulario y me comunicaré con usted lo antes posible.</p>
      </div>

      <form ref={refForm} onSubmit={handleSubmit} className='main__section4-form'>
        <div className='form__group'>
          <label htmlFor="username">Nombre</label>
          <input
            type="text" 
            placeholder="Ej: Jose Antonio" 
            id="username" 
            name="username" 
            required
            value={valueName}
            onChange={(e) => setValueName(e.target.value)}
          />
        </div>

        <div className='form__group'>
          <label htmlFor="email">Email</label>
          <input
              type="email" 
              id="email" 
              name="email" 
              placeholder="Ej: pancho56@gmail.com" 
              required
              value={valueEmail}
              onChange={(e) => setValueEmail(e.target.value)}
            />
        </div>

        <div className='form__group'>
          <label htmlFor="message">Mensaje</label>
          <textarea 
              name="message" 
              placeholder='Escriba su mensaje' 
              id="message"
              value={valueMessage}
              onChange={(e) => setValueMessage(e.target.value)}
            />
        </div>

        <button type='submit' className='form__button'>Enviar</button>
      </form>
      {sentMessage !== null && (
          <div className={`sent-message ${sentMessage ? 'message-succes' : 'message-invalid'}`}>
            <h3>{sentMessage ? 'Su Email a sido enviado exitosamente' : 'Su email no ha sido enviado'}</h3>
          </div>
        )}
    </section>
  )
}
