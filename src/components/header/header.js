import React, { useEffect, useRef, useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark,faUserNurse, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import {ContainerHeader} from './styles.js'

import Toggler from '../darkmode/index.js'

import  logo  from '../../assets/images/icons/logo_syscare_150.png'


import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../../utils/usePersistedState';
import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'; 
import SwitchDark from '../../components/darkmode';  




export function Header(){
  
  function HandleToggleMenu() {
    const nav = document.querySelector('#header nav'); 
    const suportBtn = document.querySelector('.ainda_nao');

    const teste = document.querySelector('.darkIcon');

    if(teste.classList.contains('darkIcontoggle')){
        teste.classList.remove('darkIcontoggle')
    }else{
        teste.classList.add('darkIcontoggle');
    }
    
    

    if(nav.classList.contains('show')){

        suportBtn.classList.toggle('show_btn');
        nav.classList.toggle('show'); 
        
    }else {
        suportBtn.classList.toggle('show_btn');
        nav.classList.toggle('show'); 
        
    }
    
  }


   const handleCloseMenu = (time) => { 
     const nav = document.querySelector('#header nav'); 
     nav.classList.remove('show');
    }

   

  
    

  return (
    <>
    <ContainerHeader>
    {/*====  HEADER/NAV ====  */}
    <header id="header">
        <nav className="container">
          <a href="/" className="logo">
            <img  src={logo} alt="imagem logo syscare" />
          </a>
          <div className="menu">
        <ul className="grid">
          <li>
            <a className="title title_toggle" href="/" alt="" onClick={handleCloseMenu} name="home" >Home</a>
          </li>
          <li>
            <a className="title title_toggle" href="/#about" alt="" onClick={handleCloseMenu} name="about"  >Sobre</a>
          </li>
          <li>
            <a className="title title_toggle" href="/#products" alt="" onClick={handleCloseMenu} name="products" >Produtos</a>
          </li>
          <li>
            <a className="title title_toggle" href="/#testimonials" alt="" onClick={handleCloseMenu} name="testmonials"  >Depoimentos</a>
          </li>
          <li>
            <a className="title title_toggle" href="/#contact" alt="" onClick={handleCloseMenu} name="contact" >Contato</a>
          </li>
        </ul>
        {/* ==== botão suporte ===== */}
        <ul>
          {/* <li>
              <div className="ainda_nao show"> 
              <SwitchDark toggleTheme={toggleTheme} />
            </div>
          </li> */}
          <li>
            <div className="ainda_nao show"> 
              <a href="/suporte" className="button btn2"  alt="Botão para suporte">
              <FontAwesomeIcon className="icones" icon={ faPhoneVolume } />Suporte
            </a>
          </div>
        </li>
        <li>
          <div className="ainda_nao login_btn show" >
            <a href="http://dese.syscare.com.br"  className="btn1" target="_blank"  alt="área de login">
              <FontAwesomeIcon className="icones login_icon" icon={ faUserNurse } /><span>Entrar</span>
            </a>
          </div>
        </li>
        </ul>

        

      </div>

      <div className="toggle open" >
        <FontAwesomeIcon icon={faBars} onClick={HandleToggleMenu} />
      </div>    
      
      <div className="toggle close">
        <FontAwesomeIcon icon={faXmark}  onClick={HandleToggleMenu} />
      </div>

          {/* ==== botão suporte ===== */}
  
        </nav>

    </header>
    </ContainerHeader>
    </>
  )
}