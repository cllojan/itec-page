import React, { useEffect,useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import { useRouter } from "next/router";
import Image from "next/image";

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
        <a className="menu">
          <span className='styleLink'>ITEC</span>
          <ul className="submenu">
            <Link href="/About"><span className="submenu__link">Vision y Mision</span></Link>
            <Link href="/About"><span className="submenu__link">Autoridades</span></Link>
            <Link href="/About"><span className="submenu__link">Transparencia</span></Link>
            <Link href="/About"><span className="submenu__link">Unidad de bienestar Estudiantil</span></Link>

          </ul>
        </a>
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
