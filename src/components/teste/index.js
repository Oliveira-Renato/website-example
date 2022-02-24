import React, { useEffect }  from "react";
import  logo  from '../../images/iconsLogo/logo_syscare_200.png'
import ReactDOM from 'react-dom';

import $ from 'jquery';

import './styles.scss'
import { ToggleMenu } from "../ToggleMenu/Toggle";
import { ProgressBar } from '../progressbar'


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
            <a href="#home" className="navbar-brand">
              <div className="logo">
                <img src={logo} alt='logo' />
              </div>
            </a>
            <div className="navMenu">

              <ul>
                <li>
                  <a href='#home' className="nav-link">Home</a>
                </li>
                <li>
                  <a href='#about' className="nav-link" >Sobre</a>
                </li>
                <li>
                  <a href='#home' className="nav-link" >Produtos</a>
                </li>
                <li>
                  <a href='#contact' className="nav-link" >Contatos</a>
                </li>
              </ul>
              <div className='buttonNav'>
                <button>Suporte</button>
              </div>
            </div>
          </nav>

        </div>
      <ProgressBar />
      </header>

      
      
    </>
  );
};


export default Teste;
