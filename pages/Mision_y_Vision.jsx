/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Head from 'next/head'

const Mision_y_Vision = () => {
  return (
    <div className="cont_mv">
        <Head>
    <title>Mision</title>
    </Head>
         <h1>Vision y Mision</h1>
        <div className="mv">
       
        <div className="mision">
            
            <img src="https://itec.edu.ec/wp-content/uploads/2019/09/VISI%C3%93N-WEB.png" alt="mision"  />
            <div className="mision_p">
                <h3>Mision</h3>
                <p>El Instituto Superior Tecnológico “La Castellana ”, es una institución de educación superior, que forma profesionales tecnólogos con capacidad crítica, reflexiva y creativa, bajo parámetros de responsabilidad social, principios éticos y plenamente competentes acorde a los avances de la ciencia y tecnología, con un desempeño proactivo en la comunidad, aptos para desempeñarse de forma innovadora en el campo laboral, contribuyendo de manera efectiva al desarrollo socio-económico local, regional y nacional, en el marco del respeto a la cultura, interculturalidad, y a la naturaleza.</p>
            </div>
        </div>
        <div className="vision">
        <img src="https://itec.edu.ec/wp-content/uploads/2019/09/MISI%C3%93N-WEB.png" alt="mision"  />
            <div className="vision_p">
                <h3>Vision</h3>
                <p>Ser la Institución Superior Tecnológica, líder en el sur del país, de sólido prestigio, confianza y credibilidad en el ámbito nacional e internacional, acreditada y reconocida por la excelencia académica, que forma integralmente con responsabilidad social a profesionales competitivos e innovadores, con sólidos conocimientos tecnológicos, ética profesional y competencia, que garantizan una verdadera contribución al desarrollo socio- económico del país.</p>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Mision_y_Vision
