import React, { useEffect,useState } from "react";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";


const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  
  const router = useRouter();
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY >=80){
        setNavbar(false);
        
      }else{
        setNavbar(true);
      }
    })
  });

  return (
    <div className={ navbar  ? "header" : "header active"} style={{background: router.route == "/" ? "" : "#1c335f"}}>
      <div>
        <Link href='/'>
          <span className='styleLink'>ITEC</span>
        </Link>
      </div>
      <div className="header__links">
        <Link href='/'>
          <span className='styleLink'>Inicio</span>
        </Link>
        <div className="menu">
          <span className='styleLink'>Itec<FontAwesomeIcon icon={faAngleDown} style={{ fontSize: 15, marginLeft:10 }}/></span>
          <ul className="submenu">
            <Link href="/About"><span className="submenu__link">Vision y Mision</span></Link>
            <Link href="/About"><span className="submenu__link">Autoridades</span></Link>
            <div className="menu_tp submenu__link">
              <span className='styleLink'>Transparencia<FontAwesomeIcon icon={faAngleDown} style={{ fontSize: 15, marginLeft:10 }}/></span>
              <ul className="submenu_tp">
                <Link href="/About"><span className="submenu__link">Vision y Mision</span></Link>
                <Link href="/About"><span className="submenu__link">Autoridades</span></Link>
              </ul>
            </div>
            <Link href="/About"><span className="submenu__link">Unidad de bienestar Estudiantil</span></Link>

          </ul>
        </div>
        <Link href='/'>
          <span className='styleLink'>Oferta Academica</span>
        </Link>

        <Link href='/'>
          <span className='styleLink'>Contacto</span>
        </Link>
        <Link href='/'>
          <span className='styleLink'>Inscribirse</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
