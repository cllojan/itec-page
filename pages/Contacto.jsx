import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
const Contacto = () => {
  return (
    <div className='contacto'>
        <div className="cont__info">
            <h1>Contactenos</h1>
            <h4>José Antonio Eguiguren, Ramón Pinto y Lauro Guerrero</h4>
            <h4>072577510 - 0987378649</h4>
            <h4>informacion@itec.edu.ec</h4>
            <div className="redes">
              <FontAwesomeIcon icon={faFacebook} className="facebook"/>
              <FontAwesomeIcon icon={faYoutube} className="youtube"/>
              <FontAwesomeIcon icon={faTwitter} className="twitter"/>
            </div>
        </div>
        <div className="cont__form">
            <span>Dejanos tu mensaje</span>
            <input type="text" placeholder='Ingrese su nombre' />
            <input type="text" placeholder='Ingrese su correo'/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Enviar</button>
        </div>
    </div>
  )
}

export default Contacto