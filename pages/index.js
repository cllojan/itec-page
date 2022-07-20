import Head from "next/head";
import Image from "next/image";
import Slider from "../components/Slider.jsx";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Slider />
      </main>
      <section>
        <div className='features'>
          <div className='feature_card home'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm3-9h6v6H9v-6zm2 2v2h2v-2h-2z' />
            </svg>

            <span>Eva Itec</span>
          </div>
          <div className='feature_card mail'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z' />
            </svg>
            <span>Correo Institucional</span>
          </div>
          <div className='feature_card folder'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM20 11H4v8h16v-8zm0-2V7h-8.414l-2-2H4v4h16z' />
            </svg>
            <span>Repositorio Digital</span>
          </div>
          <div className='feature_card folder'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM20 11H4v8h16v-8zm0-2V7h-8.414l-2-2H4v4h16z' />
            </svg>
            <span>Repositorio Digital</span>
          </div>
        </div>
        <div className='carrers'>
          <h3 className='oferta'>Oferta Academicas</h3>
          <hr />
          <div className='carreras_tecnologico'>
            <h3>Tecnologia superior</h3>
            <div className='list_carrers'>
              <div className='list'></div>
              <div className='list'></div>
              <div className='list'></div>
              <div className='list'></div>
              <div className='list'></div>
              <div className='list'></div>
            </div>
          </div>
          <div className='carreras_tecnico'>
            <h3>Tecnico superior</h3>
            <div className='list_carrers'>
              <div className='list'></div>
              <div className='list'></div>
            </div>
          </div>
        </div>
        <div className='noticias'>
          <h3>Ultimas Noticias</h3>
          <div className='noticias_list'>
            <div className='list_elm'>
              <div className='cont_img'></div>
              <div className='list_info'>
                <h4 className='titulo'>
                  Chris Hemsworth eligió a su personaje favorito de Stranger
                  Things
                </h4>
                <p className='desc'>
                  El actor de Marvel demostró ser un auténtico fanático de la
                  serie con Millie Bobby Brown. Además, Taika Waititi reveló una
                  especial conexión de la ficción de los Duffer con Thor: Love
                  and Thunder.
                </p>
              </div>
            </div>
            <div className='list_elm'>
              <div className='cont_img'></div>
              <div className='list_info'>
                <h4 className='titulo'>
                  Chris Hemsworth eligió a su personaje favorito de Stranger
                  Things
                </h4>
                <p className='desc'>
                  El actor de Marvel demostró ser un auténtico fanático de la
                  serie con Millie Bobby Brown. Además, Taika Waititi reveló una
                  especial conexión de la ficción de los Duffer con Thor: Love
                  and Thunder.
                </p>
              </div>
            </div>
            <div className='list_elm'>
              <div className='cont_img'></div>
              <div className='list_info'>
                <h4 className='titulo'>
                  Chris Hemsworth eligió a su personaje favorito de Stranger
                  Things
                </h4>
                <p className='desc'>
                  El actor de Marvel demostró ser un auténtico fanático de la
                  serie con Millie Bobby Brown. Además, Taika Waititi reveló una
                  especial conexión de la ficción de los Duffer con Thor: Love
                  and Thunder.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='convenios'>
          <h3>Convenios</h3>
          <div className='list_convenios'>
            <div className="convenio"></div>
            <div className="convenio"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
