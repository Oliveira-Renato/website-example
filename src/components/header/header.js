import React, { useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faCaretDown } from "@fortawesome/free-solid-svg-icons";
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

  const handleCloseMenu = function(pToggle){
    const toggleThemeIcon = document.querySelector('.darkIcon');
    const nav = document.querySelector('#header nav');
    const subMenu = document.querySelector('.sub-menu')

    if(pToggle === 'here') {
      subMenu.classList.toggle('sub-clicked');
    } else {
      subMenu.classList.remove('sub-clicked');
      toggleThemeIcon.classList.remove('darkIcontoggle');
      nav.classList.remove('show');
    }
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
                  <a className="title title_toggle" href="/#modules" alt="" onClick={handleCloseMenu} name="products" >Serviços</a>
                </li>
                {/* Depoimentos aqui (apagado) */}
                <li>
                  <a className="title title_toggle" href="/#contact" alt="" onClick={handleCloseMenu} name="contact" >Contato</a>
                </li>
                {/* Mais itens */}
                <li>
                  <div className="sub-menu">
                    <a className="title title_toggle" onClick={() => handleCloseMenu('here')}  >
                      Mais
                      <FontAwesomeIcon icon={faCaretDown}  />
                    </a>
                    <ul className='sub-menu-content'>
                      <li>
                        <a href="/produtos" className="title title_toggle" alt="" name="about" >Aluguel de equipamentos</a>
                      </li>
                      <li>
                        <a href="/regimento-interno" className="title title_toggle" alt="" name="regimento interno" >Regimento Interno</a>
                      </li>
                      <li>
                        <a href="/codigo-de-etica" className="title title_toggle" alt="" name="codigo de etica" >Código de Ética</a>
                      </li>
                      <li>
                        <a href="/compliance" className="title title_toggle" alt="" name="compliance" >Compliance</a>
                      </li>
                      <li>
                        <a href="/lgpd" className="title title_toggle" alt="" name="lgpd" >LGPD</a>
                      </li>
                      <li>
                        <a href="/legislacao" className="title title_toggle" alt="" name="legislacao" >Legislação</a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* ==== ICONE DARKMODE MOON ===== */}
                <div className="dark_theme_container">
                  <Toggler toggleTheme={toggleTheme} />
                </div>
              </ul>
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

