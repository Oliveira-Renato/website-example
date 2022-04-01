import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* ===== ICONES ===== */
import {
  faHouseMedical
} from "@fortawesome/free-solid-svg-icons";


import data from './data.json'

import { Card } from 'react-bootstrap';
import { Header } from '../header/header';
import { Footer } from '../../pages/footer';


import './styles.scss';

export function ProductTest(){

  
  console.log(data)

  const newData = data.map((x,index,teste)=>{
    return (
      
    
      <div className="card"  key ={teste[index]['id']}>
        <div className="icones">
          <FontAwesomeIcon icon={ faHouseMedical }  />
        </div>
        
        <h3 className="title">{teste[index]['titulo']}</h3>
        <p>
          {teste[index]['content']}
        </p>
      </div>

    )
  })

  return (
    <div>
      <Header />
      <main>
          <section className="section" id="products">
            <div className="container">
              <header>
                <h2 className="title">Produtos</h2>
                <p>Com mais de 20 anos no mercado, o <strong>Syscare</strong> já
                  conquistou inúmeros  clientes com seus serviços
                  exclusivos.
                  </p>
              </header>
              <div className="cards grid">         
                {newData}             
              </div>
            
            </div>
          </section>
        </main>

        {/*====  SEPARETOR 2 ====  */}
        <div className="divider-1"></div>

        <Footer />
    </div>
  )
}