import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark,faUserNurse, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import {ContainerHeader} from './styles.js'

import  logo  from '../../assets/images/icons/logo_syscare_200.png';

export function Header(){
  const wDeseUrl = 'http://dese.syscare.com.br';

  function HandleToggleMenu() {
    const nav = document.querySelector('#header nav'); 
    const suportBtn = document.querySelector('.ainda_nao');
    const toggleThemeIcon = document.querySelector('.darkIcon');

    toggleThemeIcon.classList.contains('darkIcontoggle')?toggleThemeIcon.classList.remove('darkIcontoggle'):toggleThemeIcon.classList.add('darkIcontoggle');

    if(nav.classList.contains('show')){
        suportBtn.classList.toggle('show_btn');
        nav.classList.toggle('show'); 
    }else {
        suportBtn.classList.toggle('show_btn');
        nav.classList.toggle('show'); 
    }
  }
  
  function validaUrl(url){
    const parsed = new URL(url);
    return ['http:','https:'].includes(parsed.protocol);
  }

  const handleCloseMenu = () => { 
      const toggleThemeIcon = document.querySelector('.darkIcon');
      const nav = document.querySelector('#header nav'); 

      nav.classList.remove('show');
      toggleThemeIcon.classList.remove('darkIcontoggle');
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
                    <div className="sub-menu">
                      <a className="title title_toggle sobre_menu" href="/#about" alt="" onClick={handleCloseMenu} name="about"  >Sobre</a>
                      <ul className='sub-menu-content'>
                        <div>
                          <a href="/localizacao" className="title title_toggle" alt=""  name="about" >Onde estamos</a>
                        </div>
                      </ul>
                    </div>
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
                {/* <ul>
                  <li>
                    <div className="ainda_nao show"> 
                      <a href="/suporte" className="button btn2"  alt="Botão para suporte">
                        <FontAwesomeIcon className="icones" icon={ faPhoneVolume } />Suporte
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="ainda_nao login_btn show" >
                      <a href={validaUrl(wDeseUrl) ? wDeseUrl:''}  className="btn1" target="_blank"  alt="área de login" rel="noreferrer">
                        <FontAwesomeIcon className="icones login_icon" icon={ faUserNurse } /><span>Entrar</span>
                      </a>
                    </div>
                  </li>
                </ul> */}

              </div>

              <div className="toggle open" >
                <FontAwesomeIcon icon={faBars} onClick={HandleToggleMenu} />
              </div>    
          
              <div className="toggle close">
                <FontAwesomeIcon icon={faXmark}  onClick={HandleToggleMenu} />
              </div>
            </nav>
        </header>
      </ContainerHeader>
    </>
  )
}

