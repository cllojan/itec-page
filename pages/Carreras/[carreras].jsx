import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import {data} from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListRadio,
  
} from "@fortawesome/free-solid-svg-icons";
const carreras = () => {
  /* 
    To this URL: https://localhost:1337/api/<content>
    With the header: Authorization: bearer 0c0712791a581aaa6e63422ac3944dd5095b6a4296730328cce01b397e25107dac579fb8e119b227de85db18fddd370d50b37fd17da608deb19a18c42b61b1ff80a2f8bd9db39356efc32452cb6053f77ff6e3586b6305dae5148ffbddac095b7cdad054a37d5212d6182c6febc73fe0024a827d6b7544c7c172f7158127a320
  */
  const router = new useRouter();
  let ruta = router.query.carreras;
  console.log(data);
  return (
    <div className='center_carrers'>
    <Head>
    <title>{String(ruta).replace(/\_/gi," ")}</title>
    </Head>
    {/* the rest of the JSX */}
      <div className="carrera_cont">
        <h1>{data[ruta].Nombre}</h1>
        <h3>Caracteristicas</h3>
        <p>{data[ruta].Caracteristicas}</p>
        <h3>Perfil Profesional</h3>
        <p>{data[ruta].perfil}</p>
        <FontAwesomeIcon icon={faListRadio} style={{fontSize:10}}/>
        <a href={data[ruta].Malla}>Malla</a>
      </div>
    </div>
    )
  
}



export default carreras;

