import React, { useEffect }  from "react";
import  logo  from '../../images/iconsLogo/logo_syscare_200.png'

import './styles.scss'


const Teste = () => {


  return (
    <>    
      <header>
        <div className="container">

          <nav>
            <a href="/" className="navbar-brand">
              <div className="logo">
                <img src={logo} alt='logo' />
              </div>
            </a>

            <div className="toggle">
            </div>

            <div className="navbarMenu">

              <ul>
                <li>
                  <a href='#home' >Home</a>
                </li>
                <li>
                  <a href='#home' >Sobre</a>
                </li>
                <li>
                  <a href='#home' >Produtos</a>
                </li>
                <li>
                  <a href='#home' >Contatos</a>
                </li>
              </ul>
            
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};


export default Teste;
