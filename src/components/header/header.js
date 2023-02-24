import React, { useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ContainerHeader } from './styles.js'

import logo from '../../assets/images/icons/logo.png';
import { Toggler } from '../darkmode/index.js';
import usePersistedState from '../../utils/usePersistedState.js';
import dark from '../../styles/themes/dark.js';
import light from '../../styles/themes/light.js';

export function Header() {

  const [currentTheme, setCurrentTheme] = usePersistedState('themes', light);

  const toggleTheme = () => {
    let themes = JSON.parse(localStorage.getItem('themes'));
    setCurrentTheme(themes.title === 'light' ? dark : light);
    window.location.reload();
  };

  function HandleToggleMenu() {
    const nav = document.querySelector('#header nav');
    const suportBtn = document.querySelector('.ainda_nao');
    const toggleThemeIcon = document.querySelector('.darkIcon');

    toggleThemeIcon.classList.contains('darkIcontoggle') ? toggleThemeIcon.classList.remove('darkIcontoggle') : toggleThemeIcon.classList.add('darkIcontoggle');

    if (nav.classList.contains('show')) {
      suportBtn.classList.toggle('show_btn');
      nav.classList.toggle('show');
    } else {
      suportBtn.classList.toggle('show_btn');
      nav.classList.toggle('show');
    }
  }

  function validaUrl(url) {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
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
              <img src={logo} alt="imagem logo syscare" />
            </a>

            <div className="menu">
              <ul className="grid">
                <li>
                  <a className="title title_toggle" href="/" alt="" onClick={handleCloseMenu} name="home" >Home</a>
                </li>
                <li>
                  <a className="title title_toggle sobre_menu" href="/#about" alt="" onClick={handleCloseMenu} name="about"  >Quem Somos</a>

                </li>
                <li>
                  <div className="sub-menu">
                    <a className="title title_toggle" href="/#products" alt="" onClick={handleCloseMenu} name="products" >Serviços</a>
                    <ul className='sub-menu-content'>
                      <div>
                        <a href="/produtos" className="title title_toggle" alt="" name="about" >Aluguel de equipamentos</a>
                      </div>
                    </ul>
                  </div>
                </li>
                {/* Depoimentos aqui (apagado) */}
                <li>
                  <a className="title title_toggle" href="/#contact" alt="" onClick={handleCloseMenu} name="contact" >Contato</a>
                </li>
                {/* ==== ICONE DARKMODE MOON ===== */}
                <div className="dark_theme_container">
                  <Toggler toggleTheme={toggleTheme} />
                </div>
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
              <FontAwesomeIcon icon={faXmark} onClick={HandleToggleMenu} />
            </div>
          </nav>
        </header>
      </ContainerHeader>
    </>
  )
}

