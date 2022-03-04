import React, { useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";

import './styles.scss'
import '../../styles/media.scss'


export function ToggleMenu(){

   function HandleToggleMenu() {
     const nav = document.querySelector('#header nav');
     const menuToggle = document.querySelectorAll('nav .toggle');
     
     if(nav.classList.contains('show')){
        nav.classList.remove('show');
     }else {
        nav.classList.add('show');
     }
     
    //  sidebar.classList.toggle('active');
   }

   

  return(
    <>
      <div className="menu">
        <ul className="grid">
          <li><a className="title" href="#home" alt="" onClick={HandleToggleMenu} >Home</a></li>
          <li><a className="title" href="#about" alt="" onClick={HandleToggleMenu} >Sobre</a></li>
          <li><a className="title" href="#products" alt="" onClick={HandleToggleMenu} >Produtos</a></li>
          <li><a className="title" href="#testimonials" alt="" onClick={HandleToggleMenu} >Depoimentos</a></li>
          <li><a className="title" href="#contact" alt="" onClick={HandleToggleMenu}>Contato</a></li>
        </ul>
      </div>

      <div className="toggle open" >
        <FontAwesomeIcon icon={faBars} onClick={HandleToggleMenu} />
      </div>
      
      <div className="toggle close">
        <FontAwesomeIcon icon={faXmark} onClick={HandleToggleMenu}  />
      </div>
    </>
  )

}