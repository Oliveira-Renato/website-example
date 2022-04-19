import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { FaCopyright } from "react-icons/fa";

import {Container} from  './styles.js'

export function Footer(){
  const [year] = useState(new Date().getFullYear())
  
  return(
    <Container>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Empresa</h4>
              <ul>
                <li><a href="/#about">Sobre nós</a></li>
                <li><a href="/produtos">Nossos serviços</a></li>
                <li><a href="#">Política de privacidade</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Suporte</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="/suporte">Suporte</a></li>
                <li><a href="/">Home</a></li>
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
              <h4>Siga-nos</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/SistemaSysCare" target="_blank">
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
            <p>{year} by <FaCopyright color="#FFF"/> Kennen Consultoria e Sistemas de Informação Ltda.</p>
        </div>
      </footer>
    </Container>
  )
}