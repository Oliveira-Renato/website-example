import React from "react";

import { FaCopyright } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



import '../../styles/footer/styles.scss'

import kennenImg from '../../images/iconsLogo/header_kennen.png'
import syscareImg from '../../images/iconsLogo/logo_syscare_200.png'


export function Footer(){
  return(
      // <div className="footer__social">
      //   <a href="">
      //     <FaInstagram size="40"  color="#FFF"/>
      //   </a>
      //   <a href="">
      //     <FaYoutube size="40"  color="#FFF"/>
      //   </a>
      //   <a href="">
      //     <FaLinkedin size="40"  color="#FFF"/>
      //   </a>    
      // </div>


    
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre nos</a></li>
            <li><a href="#">Nossos serviços</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Suporte</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Suporte</a></li>
            <li><a href="#">returns</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Produtos</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Siga nos</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
    
  )
}