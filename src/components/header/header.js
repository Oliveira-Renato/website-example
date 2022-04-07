import React, { useRef, useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark,faUserNurse, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import './styles.scss'
import '../../styles/media.scss'


import  logo  from '../../images/iconsLogo/logo_syscare_150.png'


import  contactImg from '../../images/symbols/contact.png'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import { Link } from 'react-router-dom';


export function Header(){
  const [url, setUrl] = useState('')

  function HandleToggleMenu() {
    const nav = document.querySelector('#header nav'); 
    const suportBtn = document.querySelector('.ainda_nao');

    if(nav.classList.contains('show')){
        suportBtn.classList.toggle('show_btn');
        nav.classList.toggle('show');
        
        
    }else {
        suportBtn.classList.toggle('show_btn');
        nav.classList.toggle('show');
        
    }
    //  sidebar.classList.toggle('active');
  }



   const handleCloseMenu = (time) => { 
    //  console.log(window.location.pathname);
    // window.location.pathname = '';
     const nav = document.querySelector('#header nav'); 
     nav.classList.remove('show');
     //window.location.pathname = '#'+ time
    }

   

  
    

  return (
    <>
    {/*====  HEADER/NAV ====  */}
    <header id="header">
        <nav className="container">
          <a href="/" className="logo">
            <img  src={logo} alt="imagem logo syscare" />
          </a>
          <div className="menu">
        <ul className="grid">
          <li>
            <a className="title" href="/" alt="" onClick={handleCloseMenu} name="home" >Home</a>
          </li>
          <li>
            <a className="title" href="/#about" alt="" onClick={handleCloseMenu} name="about"  >Sobre</a>
          </li>
          <li>
            <a className="title" href="/#products" alt="" onClick={handleCloseMenu} name="products" >Produtos</a>
          </li>
          <li>
            <a className="title" href="/#testimonials" alt="" onClick={handleCloseMenu} name="testmonials"  >Depoimentos</a>
          </li>
          <li>
            <a className="title" href="/#contact" alt="" onClick={handleCloseMenu} name="contact" >Contato</a>
          </li>
        </ul>
        {/* ==== botão suporte ===== */}
        <ul>
          <li><div className="ainda_nao show"> 
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
      
    </>
  )
}