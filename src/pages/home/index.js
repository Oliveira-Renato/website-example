import React from 'react';

//import mainImg from '../../assets/images/home/home.jpg';
import mainImg from '../../assets/images/home/home2.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

/* ===== ICONES ===== */
import {
  faHouseMedical,
  faLaptopMedical,
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowUp,
  faAnglesDown
} from "@fortawesome/free-solid-svg-icons";

/* ===== PAGES ===== */
import { Header } from '../../components/header/header';
import { AboutPage } from '../about';
import { ContactForm } from '../contacts';
import { Footer } from '../footer';

import { Container } from './animation.js';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import { ModulesComponent } from '../../components/modulos';

export function Home() {
  return (
    <div>
      <Container>
        {/*====  HEADER/NAV ====  */}
        <div className='header_container'>
          <Header />
        </div>

        {/*==== TESTIMONIALS ==== */}
        {/*====  MAIN ====  */}
        <main>
          <section className="section" id="home">
            <div className="container grid">
              <div className="image image_home">
                <img src={mainImg} alt="Nurse taking care of an old lady at her home" />
              </div>

              <div className="text">
                <h1 className="title main_title">BessaCare</h1>
                <div className="typewriter">
                  <h2 className="title second_title">Serviços de Home Care</h2>
                </div>
                <p>Atenção médica e cuidados de confiança para o paciente e sua família.</p>

                <a className='button' href="#about">
                  <FontAwesomeIcon className="icones" icon={faAnglesDown} />Saiba mais
                </a>
              </div>
            </div>
          </section>

          {/*====  SEPARETOR 1 ====  */}
          <div className="divider-1"></div>

          {/*====  ABOUT ====  */}
          <AboutPage />
          {/*====  SEPARETOR 2 ====  */}
          <div className="divider-2"></div>

          {/*====  PRODUCTS ====  */}
          {/*====  MODULOS ====  */}
          <ModulesComponent />

          {/*====  SEPARETOR 1 ====  */}
          <div className="divider-1"></div>

          {/*====  SEPARETOR 2 ====  */}
          <div className="divider-2"></div>

          {/*====  CONTACTS ====  */}
          <section className="section" id="contact">
            <div className="container grid">
              <div className="text">
                <h2 className="title title_products">Fale conosco!</h2>
                <p> Se você tem alguma dúvida ou quer mais informações, estamos a disposição para melhor ajudar e orientar.</p>
                <a href="https://api.whatsapp.com/send?phone=+5511991501338&text=Oi Gostaria de agendar um horário" className="button">
                  {/* https://api.whatsapp.com/send?phone=+551199150-1338&text=Oi */}
                  <div className="icones">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  Entrar em contato
                </a>
              </div>

              <div className="links">
                <ul className="grid">
                  <li>
                    <FontAwesomeIcon icon={faPhone} className="icones" />55 (11) 4208-4048
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className="icones" />comercial@essacare.com.br
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} className="icones" />Alameda Araguaia, 2044 – Conjunto 510 (Bloco 1), São Paulo, SP, 06455-906
                  </li>
                </ul>
              </div>


            </div>
            {/*====  FORMS ====  */}
            <div className="forms container">
              <ContactForm />
            </div>
          </section>

        </main>

        {/*====  SEPARETOR 2 ====  */}
        <div className="divider-1"></div>

        {/*====  FOOTER ====  */}
        <Footer />

        {/*====  SCROLL TO TOP ====  */}
        <a href="#home" className="back-to-top">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </Container>
    </div>
  )
}