import React, { useEffect } from 'react'
import  logo  from '../../images/iconsLogo/logo_syscare_100.png'

import './styles.scss'

export function ToggleMenu(){
 
  function HandleToggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    const bluerPage = document.querySelector('.control_content');


    

    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    bluerPage.classList.toggle('bluerContent');
  }

  return(
    <>
    <div className="first ">

      <div className="toggle" onClick={HandleToggleMenu}></div>

        {/* <-----------Opções do menu ----------------> */}
          <div className="sidebar">
            <ul className="menu">
                <li>
                    <a href="#home" onClick={ HandleToggleMenu }>Início</a>
                </li>
                <li>
                    <a href="#about" onClick={ HandleToggleMenu }>Sobre</a>
                </li>
                <li>
                    <a href="#" onClick={ HandleToggleMenu }>Produtos</a>
                </li>
                <li>
                    <a href="#contact" onClick={ HandleToggleMenu }>Contato</a>
                </li>
                <li>
                    <a href="#contact" onClick={ HandleToggleMenu }>Suporte</a>
                </li>
            </ul>
            {/* <div className="imgToggle">
                <a href="#home" onClick={ HandleToggleMenu }>
                  <img src={ logo } />
                </a>
              </div> */}
          </div>

    </div>
    
    </>
  )

}