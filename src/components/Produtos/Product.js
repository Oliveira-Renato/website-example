import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* ===== ICONES ===== */
import {
  faHouseMedical
} from "@fortawesome/free-solid-svg-icons";

import data from './data.json';
import './styles.scss';

import { Header } from '../header/header';
import { Footer } from '../../pages/footer';
import { useEffect } from 'react';
import wheelChair from '../../assets/images/home/chairwheel.jpg'

export function ProductTest() {

  return (
    <div>
      <Header />
      {/*====  SEPARETOR 2 ====  */}
      <div className="divider-2"></div>

      <main onLoad={useEffect(() => document.querySelector('#products').scrollIntoView({ behavior: 'smooth' }))}>
        <section className="section" id="products" >
          <div className="container">
            <header>
              <h2 className="title">Aluguel de equipamentos</h2>
              <p>Trabalhamos apenas com produtos de alta qualidade feitos pelos fabricantes mais respeitados. Todos os produtos são instalados por nossa equipe de engenheiros. Entre em contato para fazer um orçamento</p>
              <div className='img-container'>
                <img src={wheelChair} />
              </div>
            </header>

            <div className="product-info">
              <div className="list-1">
                <h3>Nossos equipamentos médicos incluem:</h3>
                <ul>
                  <li>
                    <p>Oxigênio suplementar</p>
                  </li>
                  <li>
                    <p>Ventiladores</p>
                  </li>
                  <li>
                    <p>Dispositivos de oximetria</p>
                  </li>
                  <li>
                    <p>Ventiladores de suporte à vida</p>
                  </li>
                  <li>
                    <p>Compressores e nebulizadores</p>
                  </li>
                </ul>
              </div>

              <div className="list-2">
                <h3>Nossos itens de mobilidade incluem:</h3>
                <ul>
                  <li>
                    <p>Cadeiras de rodas</p>
                  </li>
                  <li>
                    <p>Cadeiras de banho</p>
                  </li>
                  <li>
                    <p>Cadeiras elevatórias</p>
                  </li>
                  <li>
                    <p>Andadores dobráveis</p>
                  </li>
                  <li>
                    <p>Scooters elétricos</p>
                  </li>
                  <li>
                    <p>Camas hospitalares</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*====  SEPARETOR 1 ====  */}
        <div className="divider-1"></div>

      </main>



      {/*====  SEPARETOR 1 ====  */}
      <div className="divider-1"></div>
      <Footer />
    </div>
  )
}
