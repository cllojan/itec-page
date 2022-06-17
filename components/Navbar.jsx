import React from "react";
import styled from "styled-components";
import Link from "next/link";
const Nav = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyleLink = styled.a`
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
