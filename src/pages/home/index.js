import React from 'react'
import '../../styles/home/styles.scss'


import  logo  from '../../images/iconsLogo/logo_syscare_100.png'
import mainImg from '../../images/homeImages/doctor-taking-care-senior-woman.jpg'


import { About } from '../about'
import { ContactForm } from '../contacts'
import { Pointer } from '../../components/Pointer'
import { Footer } from '../footer'
 

export function Home(){
  return (
    <div>
      <header id="header">
        <nav className="container show">
          <a href="#" className="logo">
            <img  src={logo} alt="imagem logo syscare" />
          </a>
          <div className="menu">
            <ul class="grid">
              <li><a className="title" href="#home" alt="" >Home</a></li>
              <li><a className="title" href="#about" alt="" >Sobre</a></li>
              <li><a className="title" href="#products" alt="" >Produtos</a></li>
              <li><a className="title" href="#suport" alt="" >Contato</a></li>
            </ul>
          </div>
          <div className="open">...</div>
          <div className="close">x</div>
        </nav>
      </header>
      
      <main>
        <section className="section" id="home">
          <div className="image">
              <img src={ mainImg } alt="" />
          </div>
          <div className="text">
            <h2 className="title">Syscare - gestão de Home Care</h2>
            <p>Sempre atendendo de forma ampla as empresas de Home Care. A satisfação do cliente sempre foi, e sempre será nossa prioridade!</p>

            <a className='button'>Saiba mais</a>
          </div>
        </section>
      </main>

      <div class="divider-1"></div>
      
      <section className="section">
        
      </section>
      
    </div>

    

  )
}