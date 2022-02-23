import React, { useEffect } from "react";
import {
    Nav,
    Anchor,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavBarElements';

import $ from 'jquery';
import './styles.scss'

import  logo  from '../../images/iconsLogo/logo_syscare_200.png'

import { ProgressBar } from '../progressbar'



const NavBar = () => {

    useEffect(()=>{

      $(function() {
        $(window).on("scroll", function() {

          if ($(window).scrollTop() > 25) {
            $("nav").addClass("fixed-menu");
          } else {
            $("nav").removeClass("fixed-menu");
          }

        })
        
      });

    })
  
  return (
    <div>
      
      <header className='ddd'>
        <Nav>
        
        <Anchor className="img-logo" scroll to='/'>
          <div className="logo">
                <img src={logo} alt='logo' />
          </div>
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
      </header>
      
      
    {/*  */}
    </div>
    
  );
};

export default NavBar;
