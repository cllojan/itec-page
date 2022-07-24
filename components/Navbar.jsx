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
          <ul className="submenu submenu_tc">
            <Link href="/About"><span className="submenu__link">Vision y Mision</span></Link>
            <Link href="/About"><span className="submenu__link">Autoridades</span></Link>
            <div className="menu_tp submenu__link ">
              <span >Transparencia<FontAwesomeIcon icon={faAngleDown} style={{ fontSize: 15, marginLeft:10 }}/></span>
              <ul className="submenu_tp submenu_tc">
                <Link href="/About"><span className="submenu__link_tp">PEDI</span></Link>
                <Link href="/About"><span className="submenu__link_tp">Rendicion de Cuentas 2019</span></Link>
              </ul>
            </div>
            <Link href="/About"><span className="submenu__link">Unidad de bienestar Estudiantil</span></Link>

          </ul>
        </div>
        <div className="menu ">
        <span className='styleLink'>Oferta Academica<FontAwesomeIcon icon={faAngleDown} style={{ fontSize: 15, marginLeft:10}}/></span>
          <ul className="submenu__oferta submenu_tc ">
            
            <div className="menu_tp submenu__link  ">
              <span >Carreras de nivel tecnologico Superior</span><FontAwesomeIcon icon={faAngleDown} style={{ fontSize: 15, marginLeft:10 }}/>
              <ul className="submenu_tecnologico submenu_tc">
                <Link href="/About"><span className="submenu__link_tp">Estetica Integral</span></Link>
                <Link href="/About"><span className="submenu__link_tp">Gestion de Riesgos</span></Link>
                <Link href="/About"><span className="submenu__link_tp">Comercio Exterior</span></Link>
                <Link href="/About"><span className="submenu__link_tp">Negocios Agropecuarios</span></Link>
                <Link href="/About"><span className="submenu__link_tp">Desarrollo de Software</span></Link>
                <Link href="/About"><span className="submenu__link_tp">Talento Humano</span></Link>
              </ul>
            </div>
            <div className="menu_tp submenu__link ">
              <span >Carreras de nivel tecnico Superior</span><FontAwesomeIcon icon={faAngleDown} style={{ fontSize: 15, marginLeft:42 }}/>
              <ul className="submenu_tecnico submenu_tc submenu_tc">
                <Link href="/About"><span className="submenu__link_tp">Mecanica Automotriz</span></Link>
                <Link href="/About"><span className="submenu__link_tp">Guia Nacional de Turismo</span></Link>
              </ul>
            </div>
            <Link href="/About"><span className="submenu__link">Educacion Continua</span></Link>

          </ul>
        </div>
        

        <Link href='/'>
          <span className='styleLink'>Contacto</span>
        </Link>
        <Link href='/' >
          <span className={navbar  ? "styleLink btn__ins " : "styleLink btn__ins btn__color" }>Inscribirse</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
