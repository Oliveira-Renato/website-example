import React, { useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faSuitcaseMedical} from "@fortawesome/free-solid-svg-icons";

import './styles.scss'
import '../../styles/media.scss'
import { SupportButton } from '../Button/Suport';


export function ToggleMenu(){
  
  

   function HandleToggleMenu() {
      const nav = document.querySelector('#header nav'); 
      const suportBtn = document.querySelector('.ainda_nao');

      if(nav.classList.contains('show')){
          nav.classList.toggle('show');
          suportBtn.classList.toggle('show_btn');
          
      }else {
          nav.classList.toggle('show');
          suportBtn.classList.toggle('show_btn');
      }
    //  sidebar.classList.toggle('active');
   }

   const handleCloseMenu = () => { 
     const nav = document.querySelector('#header nav'); 
     nav.classList.remove('show');
    }

  return(
    <>
      <div className="menu">
        <ul className="grid">
          <li><a className="title" href="#home" alt="" onClick={handleCloseMenu} >Home</a></li>
          <li><a className="title" href="#about" alt="" onClick={handleCloseMenu}  >Sobre</a></li>
          <li><a className="title" href="#products" alt="" onClick={handleCloseMenu}  >Produtos</a></li>
          <li><a className="title" href="#testimonials" alt="" onClick={handleCloseMenu}  >Depoimentos</a></li>
          <li><a className="title" href="#contact" alt="" onClick={handleCloseMenu} >Contato</a></li>
        </ul>
        {/* ==== botão suporte ===== */}
        <div className="ainda_nao show_btn">
            <a href="http://suporte.syscare.com.br:81/suporte/login" className="button btn2" target="_blank"  onClick={handleCloseMenu} alt="Botão para suporte">
              <FontAwesomeIcon className="icones" icon={ faSuitcaseMedical } />Suporte
            </a>
        </div>
      </div>

      <div className="toggle open" >
        <FontAwesomeIcon icon={faBars} onClick={HandleToggleMenu} />
      </div>  
      
      <div className="toggle close">
        <FontAwesomeIcon icon={faXmark}  onClick={HandleToggleMenu} />
      </div>
    </>
  )

}