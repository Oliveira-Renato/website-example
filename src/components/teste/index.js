import React, { useEffect }  from "react";




import  logo  from '../../images/iconsLogo/logo_syscare_200.png'

import { ProgressBar } from '../progressbar'

import './styles.scss'


const Teste = () => {

  useEffect(()=>{
    window.onscroll = function() {HandleScrollBar()};

    function HandleScrollBar(){
      
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      
      document.getElementById("myBar").style.width = scrolled + "%";
    }
  })

  
  return (
    <div>
      
          
      <div class="header">
      <nav>
        
        <div className="img-logo" >
          <img src={logo} alt='logo' />
        </div>

        <div className="toggle">
        </div>

        <div className="navMenu">

           <a href='#home' >
              Home
            </a>
          
          <a className="link" href='#about' >
            Sobre
          </a>
          <a href='#' >
            Produtos
          </a>
          <a className="link" href='#contact' >
            Contatos
          </a>
          
        </div>

        <div className="navBtn">
          <a target='blank' className="nav_Btn_Link" href='http://suporte.syscare.com.br:81/suporte/login' >
            Suporte
          </a>
        </div>
      </nav>



        <div class="progress-container">
          <div class="progress-bar" id="myBar"></div>
        </div> 


      </div>
    {/*  */}
    </div>
    
  );
};


export default Teste;
