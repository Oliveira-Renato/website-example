import React, { useEffect }  from "react";
import  logo  from '../../images/iconsLogo/logo_syscare_200.png'
import ReactDOM from 'react-dom';

import $ from 'jquery';

import './styles.scss'



const Teste = () => {
  useEffect(()=>{

    $(function() {
      $(window).on("scroll", function() {

        if ($(window).scrollTop() > 25) {
          $("nav").addClass("fixed-menu");
        } else {
          $("nav").removeClass("fixed-menu");
        }

      })
      
    });

  })
  return (
    <>    
      <header>
        <div className="container">

          <nav className="navbar">
            <a href="/" className="navbar-brand">
              <div className="logo">
                <img src={logo} alt='logo' />
              </div>
            </a>

            <div className="toggle">
            </div>

            <div className="navMenu">

              <ul>
                <li>
                  <a href='#home' className="nav-link">Home</a>
                </li>
                <li>
                  <a href='#home' className="nav-link" >Sobre</a>
                </li>
                <li>
                  <a href='#home' className="nav-link" >Produtos</a>
                </li>
                <li>
                  <a href='#home' className="nav-link" >Contatos</a>
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
