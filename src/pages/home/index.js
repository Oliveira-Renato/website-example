import React from 'react'

import '../../styles/home/media.scss'
import '../../styles/home/styles.scss'


import  logo  from '../../images/iconsLogo/logo_syscare_400.png'
import mainImg from '../../images/homeImages/5802654.jpg'
import cherry from '../../images/illustrations/cherry.png'
import contactDoctor from '../../images/illustrations/contact-doctor.png'
import mobileCare from '../../images/illustrations/mobile-care.png'

import { About } from '../about'
import { ContactForm } from '../contacts'
 

export function Home(){
  return (
    <div>
      <div id="home" >
        <aside>
          <img src={mobileCare} alt="Illustration symbolizing asking and questions" />
          
          <strong>Syscare</strong>
            <p>Gestão de Home Care</p>
        </aside>
          <main>
            <div className="contentBox">
                <div>
                    <h4><span>Syscare</span>, seu </h4>
                    <h4>sistema de gestão de </h4>
                    <h2>Home Care</h2>
                    <p>Sempre atendendo de forma ampla as empresas de Home Care. A satisfação do cliente sempre foi, e sempre será nossa prioridade!</p>

                    <div className="aboutus_btn">
                      <button className='btn'>Clique <span>& </span>Confira</button>
                    </div>

                  </div>   
              </div>
          </main>
      </div>
      {/*----------sobre------------------- */ }
      <div className="about-page">
        <About />
      </div>

      {/*----------sobre------------------- */ }
      <div className="contact-page">
        <ContactForm />
      </div>


      
    </div>

    

  )
}