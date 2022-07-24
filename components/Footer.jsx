/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return <div>
    <div className="footer">      
      <img src="https://itec.edu.ec/wp-content/uploads/2019/09/logo-gris-web.png" alt="" />
      <div className="direccion">
          <ul>
            <li>José Antonio Eguiguren, Ramón Pinto y Lauro Guerrero</li>
            <li>072577510 – 0987378649</li>
            <li>Informacion@itec.edu.ec</li>
          </ul>
      </div>
      <div >
        <span>Siguenos en:</span>
        <div className="redes">
        <FontAwesomeIcon icon={faFacebook} className="facebook"/>
        <FontAwesomeIcon icon={faYoutube} className="youtube"/>
        <FontAwesomeIcon icon={faTwitter} className="twitter"/>
        </div>
      </div>
    </div>
  </div>;
};

export default Footer;
