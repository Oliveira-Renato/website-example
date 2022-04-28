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

import {ModalComponent} from '../modal/index';
import { ModulesComponent } from '../modulos';

import UseMapData from '../../hooks/map/Map';


export function ProductTest(){

  return (
    <div>
      <Header />
        <main onLoad={useEffect(() => document.querySelector('#products').scrollIntoView({ behavior: 'smooth' })) }>
          <section className="section" id="products" >
            <div className="container">
              <header>
                <h2 className="title">Produtos</h2>
                <p>Com mais de 20 anos no mercado, o <strong>Syscare</strong> já
                  conquistou inúmeros  clientes com seus serviços
                  exclusivos.
                  </p>
              </header>
              <div className="cards grid">         
                 <UseMapData json={data} />            
              </div>
            </div>
          </section>

          {/*====  SEPARETOR 1 ====  */}
          <div className="divider-1"></div>

          
        </main>

        {/*====  SEPARETOR 2 ====  */}
        <div className="divider-1"></div>

          {/*====  MODULOS ====  */}
          <ModulesComponent />

        {/*====  SEPARETOR 1 ====  */}
        <div className="divider-1"></div>
        <Footer />
    </div>
  )
}
