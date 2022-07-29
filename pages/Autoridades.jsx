/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Autoridades = () => {
  return (
    <div className='cont_a'>
        <h1 className='titulo_a'>Autoridades</h1>
        <div className='cont_autoridades'>
        
        <div className="autoridades">
            <img src="https://itec.edu.ec/wp-content/uploads/2020/02/DR.-Telmo-1536x1273.png" alt="" />
            <h4>Dr. Telmo Nicanor Rodríguez González</h4>
            <span>RECTOR DEL ITEC</span>
            <p>Doctor en ciencias de la educación, mención investigación y planificación educativa.</p>
            <span>rector@itec.edu.ec</span>
        </div>
        <div className="autoridades">
            <img src="https://itec.edu.ec/wp-content/uploads/2020/02/Dr.-Vicente-1536x1322.png" alt="" />
            <h4>Dr. Vicente Cristóbal Analuisa León</h4>
            <span>VICERRECTOR ACADÉMICO DEL ITEC </span>
            
            <ul>
                <li>Doctor en jurisprudencia </li>
                <li>Abogado</li>
                <li>Lic. en ciencias sociales politcas y economicas</li>
            </ul>
            <span>vicerrect_academico@itec.edu.ec</span>
        </div>
        <div className="autoridades">
            <img src="https://itec.edu.ec/wp-content/uploads/2020/02/Dr.-Claudio-1536x1336.png" alt="" />
            <h4>Md. Claudio Rolando Rodríguez Arteaga</h4>
            <span>PRESIDENTE DEL CONSEJO GUBERNATIVO </span>
            <p>Médico veterinario zootecnista</p>
            <span className='correo_a'>administracion@itec.edu.ec</span>
        </div>
    </div>
    </div>
  )
}

export default Autoridades