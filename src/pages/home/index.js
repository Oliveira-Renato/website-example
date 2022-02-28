import React from 'react'


import  logo  from '../../images/iconsLogo/logo_syscare_200.png'
import mainImg from '../../images/homeImages/doctor-taking-care-senior-woman.jpg'
import aboutImg from '../../images/homeImages/campaign-creators.jpg'


import { ContactForm } from '../contacts'
import { Pointer } from '../../components/Pointer'
import { Footer } from '../footer'
import { ToggleMenu } from '../../components/ToggleMenu/Toggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHouseMedical, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import { faBtc } from "@fortawesome/free-brands-svg-icons";
 

export function Home(){
  return (
    <div>
      <header id="header">
        <nav className="container">
          <a href="#" className="logo">
            <img  src={logo} alt="imagem logo syscare" />
          </a>
          <ToggleMenu />
        </nav>
      </header>
      
      <main>
        <section className="section" id="home">
          <div className="container grid">
            <div className="image">
                <img src={ mainImg } alt="" />
            </div>

            <div className="text">
              <h2 className="title">SYSCARE - gestão de Home Care</h2>
              <p>Sempre atendendo de forma ampla as empresas de Home Care. A satisfação do cliente sempre foi, e sempre será nossa prioridade!</p>

              <a className='button' href="#about">Saiba mais</a>
            </div>
          </div>
        </section>
      </main>

      <div className="divider-1"></div>
      
      <section className="section" id="about" >
        <div className="container grid">
          <div className="image">
            <img src={aboutImg} alt="" />
          </div>
          <div className="text">
            <h2 className="title">Sobre nos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
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
      
      <div class="divider-2"></div>

      <section className="section" id="products">
        <div className="container grid">
          <header>
            <h2 class="title">Produtos</h2>
            <p>Com mais de 20 anos no mercado, o <strong>Syscare</strong> já
              conquistou inúmeros  clientes com seus serviços
              exclusivos.</p>
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

    </div>

    

  )
}