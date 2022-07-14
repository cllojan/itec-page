import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let header = document.querySelector(".header");
      header.classList.toggle("header_background", window.scrollY > 0);
    });
  });

  return (
    <div className='header'>
      <div>
        <Link href='/'>
          <span className='styleLink'>ITEC</span>
        </Link>
      </div>
      <div>
        <Link href='/About'>
          <span className='styleLink'>Inicio</span>
        </Link>
        <Link href='/'>
          <span className='styleLink'>ITEC</span>
        </Link>
        <Link href='/'>
          <span className='styleLink'>Oferta Academica</span>
        </Link>
        <Link href='/'>
          <span className='styleLink'>Itec Digital</span>
        </Link>
        <Link href='/'>
          <span className='styleLink'>Contacto</span>
        </Link>
        <Link href='/'>
          <span className='styleLink'>Bolsa de Empleo</span>
        </Link>
      </div>
      <div>
        <Link href='/'>
          <span className='styleLink'>Inscribirse</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
