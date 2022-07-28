import React, { useEffect,useState } from "react";
import fetcher from "../lib/strapi-client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";




export default function Navbar() {
  const [navbar, setNavbar] = useState(true);
  const [tecnologicas, setTecnologicas] = useState([]);
  const [tecnicas, setTecnicas] = useState(null);
  const router = useRouter();
  //https://firestore.googleapis.com/v1/projects/itec-data/databases/(default)/documents/carreras
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY >=80){
        setNavbar(false);
        
      }else{
        setNavbar(true);
      }
    })
    /*
    fetch("https://firestore.googleapis.com/v1/projects/itec-data/databases/(default)/documents/carreras")
      .then(response => response.json())
      .then(res => setTecnologicas(res))
      .catch(err => console.log(err))
    */
  },[]);
  //setTecnicas(Object.keys(tecnologicas.documents));
  
  return (
    <div className={ navbar  ? "header" : "header active"} style={router.route == "/" ? {position: "fixed"}:{position: "relative",color:"#17202A"}}>

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
                
                <Link href="/Carreras/Estetica_Integral"><span className="submenu__link_tp">Estetica Integral</span></Link>
                <Link href="/Carreras/Gestion_de_Riesgos"><span className="submenu__link_tp">Gestion de Riesgos</span></Link>
                <Link href="/Carreras/Comercio_Exterior"><span className="submenu__link_tp">Comercio Exterior</span></Link>
                <Link href="/Carreras/Negocios_Agropecuarios"><span className="submenu__link_tp">Negocios Agropecuarios</span></Link>
                <Link href="/Carreras/Desarrollo_de_Software"><span className="submenu__link_tp">Desarrollo de Software</span></Link>
                <Link href="/Carreras/Talento_Humano"><span className="submenu__link_tp">Talento Humano</span></Link>
              </ul>
            </div>
            <div className="menu_tp submenu__link ">
              <span >Carreras de nivel tecnico Superior</span><FontAwesomeIcon icon={faAngleDown} style={{ fontSize: 15, marginLeft:42 }}/>
              <ul className="submenu_tecnico submenu_tc submenu_tc">
                <Link href="/Carreras/Mecanica_Automotriz"><span className="submenu__link_tp">Mecanica Automotriz</span></Link>
                <Link href="/Carreras/Guia_Nacional_de_Turismo"><span className="submenu__link_tp">Guia Nacional de Turismo</span></Link>
              </ul>
            </div>
            <Link href="/About"><span className="submenu__link">Educacion Continua</span></Link>

          </ul>
        </div>
        

        <Link href='/'>
          <span className='styleLink'>Contacto</span>
        </Link>
        <Link href='/' >
          <span className={navbar  ? "styleLink btn__ins " : "styleLink btn__ins btn__color" } style={router.route == "/" ? {color:"#fff"}:{color:"#fff"}}>Inscribirse</span>
        </Link>
      </div>
    </div>
  );
};
