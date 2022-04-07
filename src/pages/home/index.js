import React from 'react'


import  logo  from '../../images/iconsLogo/logo_syscare_100.png'
import mainImg from '../../images/homeImages/home.jpg'
import aboutImg from '../../images/homeImages/campaign-creators.jpg'

//==== Users testimonials pictures ==== \\
import  caioImg  from '../../images/UserTestimonials/caio.jpg'
import  alcidezImg  from '../../images/UserTestimonials/alcidez.jpg'
import  tantanImg  from '../../images/UserTestimonials/tantan.jpg'


import { ContactForm } from '../contacts';
import { Footer } from '../footer';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartPlus } from "@fortawesome/free-solid-svg-icons";

/* ===== ICONES ===== */
import {
  faHouseMedical,
  faLaptopMedical,
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowUp,
  faSuitcaseMedical,
  faAnglesDown
} from "@fortawesome/free-solid-svg-icons";

import { faBtc, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

//==== Import Swiper React components ==== \\
import { Mousewheel , Pagination, Keyboard ,Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';

import { Header } from '../../components/header/header'
import { Testimonials } from '../testimonials'
import { AboutPage } from '../about'


export function Home(){ 
  
  
  return (
    <div>

      {/*====  HEADER/NAV ====  */}
      <Header />
      
      {/*====  MAIN ====  */}
      <main>
        <section className="section" id="home">
          <div className="container grid">
            <div className="image image_home">
                <img src={ mainImg } alt="" />
            </div>

            <div className="text">
              <h3 className="title">Syscare</h3>
              <h2 className="title">Gestão de Home Care</h2>
              <p>Sempre atendendo de forma ampla as empresas de Home Care. A satisfação do cliente sempre foi, e sempre será nossa prioridade!</p>

              <a className='button' href="#about">
                <FontAwesomeIcon className="icones" icon={ faAnglesDown } />Saiba mais
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
        <section className="section" id="products">
        <div className="container grid">
          <header>
            <h2 className="title">Produtos</h2>
            <p>Com mais de 20 anos no mercado, o <strong>Syscare</strong> já
              conquistou inúmeros  clientes com seus serviços
              exclusivos.
              </p>
          </header>
          <div className="cards grid">
            <div className="card">
              <div className="icones">
                <FontAwesomeIcon icon={ faHouseMedical }  />
              </div>
              
              <h3 className="title">Syscare - AD</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                distinctio neque blanditiis, dolorem aperiam nulla explicabo
                asperiores
              </p>
            </div>

            <div className="card">
              <div className="icones">
                <FontAwesomeIcon icon={ faLaptopMedical }/>
              </div>
              
              <h3 className="title">Syscare - SCF</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                distinctio neque blanditiis, dolorem aperiam nulla explicabo
                asperiores
              </p>
            </div>

            <div className="card">
              <div className="icones">
                <FontAwesomeIcon icon={ faHouseMedical }  />
              </div>
              
              <h3 className="title">Syscare - MGS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                distinctio neque blanditiis, dolorem aperiam nulla explicabo
                asperiores
              </p>
            </div>
          </div> 
          <div className="btn_produtos">
            <a href="/produtos" className='button'>
              <FontAwesomeIcon className="icones" icon={ faCartPlus } />Confira nossos produtos
            </a>  
          </div> 
        </div>
        </section>

        {/*====  SEPARETOR 1 ====  */}
        <div className="divider-1"></div>


        {/*====  TESTIMONIALS ====  */}
        <Testimonials />

        {/*====  SEPARETOR 2 ====  */}
        <div className="divider-2"></div>
    
        {/*====  CONTACTS ====  */}
        <section className="section" id="contact">
          <div className="container grid">
            <div className="text">
              <h2 className="title title_products">Entre em contato com a gente!</h2>
              <p> 
                Se você tem alguma dúvida, sugestão ou quer fazer uma proposta, entre em contato conosco.
              </p>
              <a href="https://api.whatsapp.com/send?phone=+5511998456754&text=Oi! Gostaria de agendar um horário" className="button">
                  <div className="icones">
                    <FontAwesomeIcon icon={ faWhatsapp } />
                  </div>
                  Entrar em contato
              </a>
            </div>

            <div className="links">
              <ul className="grid">
                <li>
                  <FontAwesomeIcon icon={faPhone} className="icones" />55 (11) 4153-1075
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="icones" />contato@kennen.com.br
                </li>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} className="icones"/>Alameda Araguaia, 2044 - Torre I
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
        <FontAwesomeIcon icon={faArrowUp}  />
      </a>
       
    </div>

  )
}