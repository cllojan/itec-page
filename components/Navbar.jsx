import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
const Nav = styled.nav`
  position:fixed;
  width: 100vw;
  height: 80px;
  background-color: transparent;
  color: #fff;
  display: flex;
  z-index:1000;
  align-items: center;
  justify-content: space-around;
`;

const StyleLink = styled.a`
  font-family:'Rubik',sans-serif;
  cursor:pointer;
  font-weight: 400;
  padding: 0rem 1rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/'>
          <StyleLink>ITEC</StyleLink>
        </Link>
      </div>
      <div>
        <Link href='/About'>
          <StyleLink>Inicio</StyleLink>
        </Link>
        <Link href='/'>
          <StyleLink>ITEC</StyleLink>
        </Link>
        <Link href='/'>
          <StyleLink>Oferta Academica</StyleLink>
        </Link>
        <Link href='/'>
          <StyleLink>Itec Digital</StyleLink>
        </Link>
        <Link href='/'>
          <StyleLink>Contacto</StyleLink>
        </Link>
        <Link href='/'>
          <StyleLink>Bolsa de Empleo</StyleLink>
        </Link>
      </div>
      <div>
        <Link href='/'>
          <StyleLink>Inscribirse</StyleLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
