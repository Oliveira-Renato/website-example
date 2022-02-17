import React from "react";
import { Link } from "react-router-dom";
import {
    Nav,
    Anchor,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavBarElements';


import  logo  from '../../images/iconsLogo/logo_syscare_200.png'



const Navbar = () => {
  return (
    <>
      <Nav>
        <Anchor className="img-logo" scroll to='/'>
          <img src={logo} alt='logo' />
        </Anchor>
        <Bars />
        <NavMenu>
          <Anchor href='#home' activeStyle>
            Home
          </Anchor>
          <Anchor href='#about' activeStyle>
            Sobre
          </Anchor>
          <Anchor href='#' activeStyle>
            Produtos
          </Anchor>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink href='#contact' activeStyle>
            Suporte
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
