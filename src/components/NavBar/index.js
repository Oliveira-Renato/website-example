import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Nav,
    Anchor,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavBarElements';

import './styles.scss'

import  logo  from '../../images/iconsLogo/logo_syscare_200.png'

import { ProgressBar } from '../progressbar'

import '../styles.scss'


const Navbar = () => {

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
      
      <Nav>
      
        <Anchor className="img-logo" scroll to='/'>
          <img src={logo} alt='logo' />
        </Anchor>
        <Bars />
        <NavMenu>

          <Anchor href='#home'  activeStyle>
            Home
          </Anchor>
          <Anchor className="link" href='#about' activeStyle>
            Sobre
          </Anchor>
          <Anchor href='#' activeStyle>
            Produtos
          </Anchor>
          <Anchor className="link" href='#contact' activeStyle>
            Contatos
          </Anchor>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink target='blank' href='http://suporte.syscare.com.br:81/suporte/login' activeStyle>
            Suporte
          </NavBtnLink>
        </NavBtn>

        
      </Nav>

     
   
    {/*  */}
    </div>
    
  );
};

export default Navbar;
