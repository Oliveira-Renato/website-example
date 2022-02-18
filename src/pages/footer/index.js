import React from "react";

import { FaCopyright } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



import '../../styles/footer/styles.scss'

import kennenImg from '../../images/iconsLogo/header_kennen.png'
import syscareImg from '../../images/iconsLogo/logo_syscare_150.png'


export function Footer(){
  return(
    <footer className="footer">
      <div className="footer__social">
        <a href="">
          <FaInstagram size="40"  color="#FFF"/>
        </a>
        <a href="">
          <FaYoutube size="40"  color="#FFF"/>
        </a>
        <a href="">
          <FaLinkedin size="40"  color="#FFF"/>
        </a>    
      </div>
      

      <div className="footer__allTogether">
        <div className="kennenFooter">
          <img src={ kennenImg } />
        </div>
        <div className="syscareFooter">
          <img src={ syscareImg } />
        </div>
      </div>

      <p className="footer__copyright">2022 by <FaCopyright color="#FFF"/> Kennen Consultoria e Sistemas de Informação Ltda.</p>
    </footer>
  )
}