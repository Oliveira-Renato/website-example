import React from 'react'


import  logo  from '../../images/iconsLogo/logo_syscare_150.png'
import mainImg from '../../images/homeImages/doctor-taking-care-senior-woman.jpg'
import aboutImg from '../../images/homeImages/campaign-creators.jpg'

//==== Users testimonials pictures ==== \\
import  caioImg  from '../../images/UserTestimonials/caio.jpg'
import  alcidezImg  from '../../images/UserTestimonials/alcidez.jpg'
import  tantanImg  from '../../images/UserTestimonials/tantan.jpg'


import { ContactForm } from '../contacts';
import { Footer } from '../footer';
import { ToggleMenu } from '../../components/ToggleMenu/Toggle';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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


export function Home(){
  
  
  return (
    <div>

      {/*====  HEADER/NAV ====  */}
      <header id="header">
        <nav className="container">
          <a href="#" className="logo">
            <img  src={logo} alt="imagem logo syscare" />
          </a>
          <ToggleMenu />

          {/* ==== botão suporte ===== */}
          <div className="suport_btn">
              <a href="http://suporte.syscare.com.br:81/suporte/login" className="button" target="_blank" alt="Botão para suporte">
                <FontAwesomeIcon className="icones" icon={ faSuitcaseMedical } />Suporte
              </a>
          </div>

        </nav>
      </header>
      
      {/*====  MAIN ====  */}
      <main>
        <section className="section" id="home">
          <div className="container grid">
            <div className="image">
                <img src={ mainImg } alt="" />
            </div>

            <div className="text">
              <h2 className="title">Syscare</h2>
              <h3 className="title">Gestão de Home Care</h3>
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
        <section className="section" id="about" >
        <div className="container grid">
          <div className="image">
            <img src={aboutImg} alt="" />
          </div>
          <div className="text">
            <h2 className="title">Sobre nós</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <br />
            <br />
            <p>
              O Syscare tem como objetivo renovar a forma de gestão das empresas desenvolvendo sistemas sob demanda, elaborados a partir das necessidades de cada cliente, e oferecendo produtos específicos como o SysCare da massa!
            </p>
            <br />
            <p>
              Sistema de Gestão de Home Care que atende de forma ampla as empresas de Home Care. Atua, também, com sistemas de ERP (Enterprise Resource Planning), tais como financeiro, contabilidade, ativo fixo.
            </p>
            <br />
            <p>
              Conta com profissionais com ampla experiência, com mais de 20 anos no mercado, tendo sua sede na cidade de Santana de Parnaíba – SP e filial em São Paulo.
            </p>
          </div>
        </div>
        </section>

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
                <FontAwesomeIcon icon={ faBtc }/>
              </div>
              
              <h3 className="title">Syscare - BTC</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                distinctio neque blanditiis, dolorem aperiam nulla explicabo
                asperiores
              </p>
            </div>
          </div>  
        </div>
        </section>

        {/*====  SEPARETOR 1 ====  */}
        <div className="divider-1"></div>


        {/*====  TESTIMONIALS ====  */}
        <section className="section" id="testimonials">
          <div className="container">
            <header>
              <h2 className="title">Depoimentos de quem já utilizou o <strong>SYSCARE</strong></h2>
            </header>
            <Swiper 
              // install Swiper modules
              modules={[Pagination, Mousewheel, Keyboard , Navigation]}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet'
              }}
              mousewheel={true}
              keyboard={true}
              >

              <SwiperSlide>
                <div className="testimonials ">
                  <blockquote>
                    <p>
                      <span>&ldquo;</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum blanditiis saepe nam excepturi explicabo ipsa error
                      ipsam neque
                    </p>
                    <cite>
                    <img src={ caioImg } alt="Foto do Caio" />
                      Caio da Massa
                    </cite>
                  </blockquote>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonials">
                  <blockquote>
                    <p>
                      <span>&ldquo;</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum blanditiis saepe nam excepturi explicabo ipsa error
                      ipsam neque
                    </p>
                    <cite>
                      <img src={ alcidezImg } alt="Foto do Alcidez Rodriguez" />
                      Alcidez Rodrigues
                    </cite>
                  </blockquote>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonials">
                  <blockquote>
                    <p>
                      <span>&ldquo;</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum blanditiis saepe nam excepturi explicabo ipsa error
                      ipsam neque
                    </p>
                    <cite>
                    <img src={ tantanImg } alt="Foto do Tantan" />
                      Tantan
                    </cite>
                  </blockquote>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </section>

        {/*====  SEPARETOR 2 ====  */}
        <div className="divider-2"></div>

        {/*====  CONTACTS ====  */}
        <section className="section" id="contact">
          <div className="container grid">
            <div className="text">
              <h2 className="title">Entre em contato com a gente!</h2>
              <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                distinctio neque blanditiis, dolorem aperiam nulla explicabo
                asperiores
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