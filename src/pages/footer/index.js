import React from "react";

import { FaCopyright } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { IoLogoLinkedin } from "react-icons/io";




import '../../styles/footer/styles.scss'

import kennenImg from '../../images/iconsLogo/header_kennen.png'
import syscareImg from '../../images/iconsLogo/logo_syscare_200.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookF, faYoutube, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";




export function Footer(){
  return(
  <footer id="footer">
    <div className="container">
      <div className="row">


        <div className="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre nos</a></li>
            <li><a href="#">Nossos serviços</a></li>
            <li><a href="#">Política de privacidade</a></li>
          </ul>
        </div>
        

        <div className="footer-col">
          <h4>Suporte</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Suporte</a></li>
            <li><a href="#">Home</a></li>
          </ul>
        </div>


        <div className="footer-col">
          <h4>Produtos</h4>
          <ul>
            <li><a href="#">Syscare - AD</a></li>
            <li><a href="#">Syscare - SCF</a></li>
            <li><a href="#">Syscare - BTC</a></li>
          </ul>
        </div>


        <div className="footer-col">
          <h4>Siga nos</h4>
          <div className="social-links">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} className="socialmedia" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} className="socialmedia" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className="socialmedia" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} className="socialmedia" />
            </a>
          </div>
        </div>


      </div>
    </div>


    <div className="copyRight">
         <p>2022 by <FaCopyright color="#FFF"/> Kennen Consultoria e Sistemas de Informação Ltda.</p>
    </div>
  </footer>
    
  )
}