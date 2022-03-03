import React from 'react'


import syscareLogo from '../../images/iconsLogo/logo_syscare_200.png';

import { Footer } from '../footer';

import './styles.scss';

export function Product() {
  return (
    <div>
        <section className="products" >
          <div className="title blackTitle back_title">
              <h2>Produtos</h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div> 
                <div className="wrapper">
                    <div className="col">
                        <p>Syscare</p>
                        <img src={syscareLogo}  />
                    </div>

                    
                    <div className="col">
                        <p className="product_p">Syscare</p>
                        <img src={syscareLogo} />
                    </div>


                    <div className="col">
                        <p className="product_p">Syscare</p>
                        <img src={syscareLogo}  />
                    </div>


                    <div className="col">
                        <p className="product_p">Syscare</p>
                        <img src={syscareLogo}  />
                    </div>


                    <div className="col">
                        <p className="product_p">Syscare</p>
                        <img src={syscareLogo}  />
                    </div>

                    <div className="col">
                        <p className="product_p">Syscare</p>
                        <img src={syscareLogo} />
                    </div>
                </div>

      </section>
      <Footer />
    </div>
  )
}