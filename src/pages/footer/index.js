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
                <li><a href="/#about">Quem somos</a></li>
                <li><a href="/produtos">Nossos serviços</a></li>
                <li><a href="#">Política de privacidade</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Suporte</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="/">Home</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Produtos</h4>
              <ul>
                <li><a href="/produtos">Aluguel de equipamentos</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Siga-nos</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
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