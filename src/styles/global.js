import { createGlobalStyle } from 'styled-components';
import './variables.css';
import './media.scss'

export default createGlobalStyle`
/*======INICIAL=========================== */
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  
  @media (min-width: 280px) {
    font-size: 58.5%;
  }
  @media (min-width: 2400px) {
    font-size: 72.5%;
  }
}
ul li {
    list-style: none;
}
a{
    text-decoration: none;
}
img {
    width: 100%;
    height: auto;
    
}
/*====  BASE ============================ */
body {
  font: 400 1.6rem 'Poppins', sans-serif;
  color: ${props => props.theme.colors.textColor};
  background:  ${props => props.theme.colors.bodyColor};
  -webkit-font-smoothing: antialiased;
}
.title {
  font: 700 2.4rem 'Poppins', sans-serif;
  color:  ${props => props.theme.colors.titleColor};
  -webkit-font-smoothing: auto;
  
}
.title::before {
  @media(min-width: 650px) {
    background:  ${props => props.theme.colors.baseColor};
  }
}
.title::before {
  @media(min-width: 650px) {
    background:  ${props => props.theme.colors.baseColor};
  }
}
.button {
  background-color:  ${props => props.theme.colors.baseColor};
  color: ${props => props.theme.colors.textColorLight};
  height: 5.6rem;
  display: inline-flex;
  align-items: center;
  padding: 0 3.2rem;
  border-radius: 0.28rem;
  font: 500 1.6rem 'DM Sans', sans-serif;
  transition: background 0.3s;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  gap: 0.5rem;
}
.button:hover {
  background:  ${props => props.theme.colors.baseColorAlt};
}
.divider-1 {
  height: 1px;
  background: linear-gradient(
    270deg,
    hsla(${props => props.theme.colors.hue}, 36%, 57%, 1) 0%,
    hsla(${props => props.theme.colors.hue}, 65%, 88%, 0.34) 100%
  );
}
.divider-2 {
  height: 1px;
  background: linear-gradient(
    270deg,
    hsla(${props => props.theme.colors.hue}, 65%, 88%, 0.34),
    hsla(${props => props.theme.colors.hue},36%, 57%, 1) 
  );
}
/*====  LAYOUT ============================ */
.container {
  margin-left: 5.6rem;
  margin-right: 5.6rem;
  justify-content: space-between;
}
.grid {
  display: grid;
  gap: 3.2rem;
}
.section {
  padding: 8rem 0;
}
//title_products
.section .title {
  text-transform: uppercase;
  margin-bottom: 1.05rem;
}
.section .title_products {
  text-align: left;
}
.section header {
  margin-bottom: 6.4rem;
}
.section header strong {
  color:  ${props => props.theme.colors.baseColor};
}
#header {
  margin-bottom: 3.2rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: transparent;
  width: 100%;
  transition: color 0.3s;
}
#header.scroll {
  background-color:  ${props => props.theme.colors.bodyColor};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
} 
main {
  margin-top: calc(${props => props.theme.colors.headerHeight} + 3.2rem);
}
strong {
  color:  ${props => props.theme.colors.baseColor};
}
/*====  LOGO ============================ */
nav a.logo  img {
    top: 0;
    left: 0;
    min-width: 100%;
    max-width: 100%;
    
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    resize:none ;
    @media (min-width: 1024px) {
      min-width: 100%;
      max-width: 100%;
    }
    @media (min-width: 1282px) {
      min-width: 100%;
      max-width: 100%;
    }
} 
/*====  NAVIGATION ============================ */
nav {
  height: ${props => props.theme.colors.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
nav ul li {
  
    text-align: center;
}
/* nav ul li a {
    transition: color 0.3s;
    position: relative;
    
} */
/* nav ul li a:hover {
    color:  ${props => props.theme.colors.baseColor};
} */
/* nav ul li a::after {
    content: '';
    width: 0%;
    height: 0px;
    background:  ${props => props.theme.colors.baseColor};
    position: absolute;
    left: 0;
    bottom: 0;
    //bottom: -1.4rem;
    transition: 0.5s;
    /* @media (max-width: 420px) {
      bottom: -0.4rem;
    }
    @media (max-width: 1024px) {
      bottom: -0.4rem;
    } */
    

/* nav ul li a:hover::after {
    width : 100%;
} */
    
nav .menu{
    opacity: 0;
    visibility: hidden;
    top: -32rem;
    transition: 0.3s;
}
nav .menu ul {
  display: none;
}
/*=========== toggle menu ==========*/
.toggle {
  color:  ${props => props.theme.colors.baseColor};
  &:hover {
    cursor: pointer;
  }
  &.close {
    margin-right: 5.6rem;
  }
  >.svg-inline--fa {
    height: 1.5em;
  }
}
.toggle_size {
  font-size: 1.5rem;
}
nav .icones {
  font-size: 1.6rem;  
  margin-right: 1.048rem;
        
}
nav .close {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: -2.4rem;
  right: 2.4rem;
  transition: 0.3s;
}
/*====  HOME ============================ */
#home {
  overflow: hidden;
}
#home .container {
  margin: 0;
}
#home .image, 
#compliance .img-container, 
#legislacao .legislacao-img,
#lgpd .lgpd-img,
#products .img-container
 {
  position: relative;
}
#home .image::before {
  content: '';
  height: 100%;
  width: 100%;
  background: ${ props => props.theme.colors.baseColorSecond };
  position: absolute;
  top: -16.8%;
  left: 16.7%;
  z-index: 0;
}
#home .image img, 
#compliance .img-container img,
#legislacao .legislacao-img img,
#lgpd .lgpd-img img,
#products .img-container img {
  position: relative;
  right: 4.68rem;
}
#home .image img,
#home .image::before {
  border-radius: 0.28rem;
}
#home .text {
  margin-left: 2.4rem;
  margin-right: 2.4rem;
  text-align: center;
}
#home .text h1 {
  margin-bottom: 1.6rem;
}
#home .text p {
  margin-bottom: 3.2rem;
}
/*====  HOME ============================ */
#about {
  background: ${props => props.theme.colors.bodyColorAlt};
}
#about .container {
  margin: 0;
}
#about .image {
  position: relative;
}
#about .image::before {
  content: '';
  height: 100%;
  width: 100%;
  background:  ${props => props.theme.colors.baseColor};
  position: absolute;
  top: -8.3%;
  left: -33%;
  z-index: 0;
}
 
#about .image img {
  position: relative;
}
#about .image img,
#about .image::before {
  border-radius: 0.28rem;
}
#about .text {
  margin-left: 2.4rem;
  margin-right: 2.4rem;
}

#about .text ul li {
  list-style: circle;
  padding-bottom: 1rem;
}
/*====  SERVICES ============================ */
.cards.grid {
  gap: 2.4rem;
}
.card {
  padding: 2.4rem 1.6rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 0.28rem solid  ${props => props.theme.colors.baseColor};
  border-radius: 0.28rem 0.28rem 0 0;
  text-align: justify;
}
.card h3 {
  text-align: center;
}
.card  .list-services {
  display: flex;
  justify-content: center;
}
.card  ul {
  margin: 1.6rem;
}
.card  ul li {
  list-style: circle;
  height: 3.4rem;
}
.card  .icones {
  display: block;
  margin-bottom: 2.4rem;
  font-size: 4rem;
  color:  ${props => props.theme.colors.baseColor};
  text-align: center;
}
.card  p {
  font-size: 1.2rem;
  @media (min-width: 1200px) {
    font-size: 1.6rem;
  }
  @media (max-width: 370px) {
    font-size: .8rem;
  }
}
.card .title {
  font-size: 2.4rem;
  margin-bottom: 1.248rem;
  @media (min-width: 280px) {
    font-size: 1.6rem;
  }
}
main #home .container .text .main_title {
  font-size: 3.8rem;
  color: ${props => props.theme.colors.baseColor};
  @media (min-width: 280px) and (max-height: 568px) {
    font-size: 2.4rem;
  }
}
main #home .container .text .second_title {
  font-size: 2.4rem;
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
  /* @media (min-width: 280px) {
    font-size: 1.4rem;
  } */
}
/*====  TESTIMONIALS ================= */
#testimonials {
  background: ${props => props.theme.colors.bodyColorAlt};
}
#testimonials .container {
  margin-left: 0;
  margin-right: 0;
}
#testimonials header {
  margin-left: 2.4rem;
  margin-right: 2.4rem;
  margin-bottom: 0;
}
#testimonials blockquote {
  padding: 3.2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, ${props => props.theme.colors.shadowPorCent});
  border-radius: 0.28rem;
  aspect-ratio: 16/7;
}
#testimonials blockquote p {
  position: relative;
  margin-bottom: 2.4rem;
  text-indent: 1.878rem;
  color:  ${props => props.theme.colors.titleColor};
}
#testimonials blockquote p span{
  font: 700 3rem serif;
  position: absolute;
  left: -1.878rem;
  line-height: 1.628rem;
  color:  ${props => props.theme.colors.baseColor};
}
#testimonials cite {
  display: flex;
  align-items: center;
  font-style:normal;
}
#testimonials cite img {
  width: 3.2rem;
  height: 3.2rem;
  object-fit: cover;
  clip-path: circle();
  margin-right: 0.8rem;
}
/*==== SWIPER ================= */
.swiper-slide {
  height: auto;
  padding: 6.4rem 1.6rem !important;
}
.swiper-pagination-bullet {
  width: 1.248rem;
  height: 1.248rem;
}
.swiper-pagination-bullet-active {
  background:  ${props => props.theme.colors.baseColor};
}
/*==== CONTACT ================= */
#contact {
  position: relative;
}
#contact .grid {
  gap: 6.4rem;
}
#contact .text p {
  margin-bottom: 3.2rem;
}
#contact .button .icones {
  font-size: 2.4rem;
  margin-right: 1.048rem;
}
#contact .button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
#contact ul.grid {
  gap: 3.2rem;
}
#contact ul li {
  display: flex;
  align-items: center;
}
#contact ul li .icones{
  color:  ${props => props.theme.colors.baseColor};
  margin-right: 0.878rem;
}
#contact .forms {
  margin: 6.4rem 2.4rem 1.6rem 2.4rem ;
}
/*==== BACK TO TOP ================= */
a.back-to-top {
  background:  ${props => props.theme.colors.baseColor};
  color: ${props => props.theme.colors.textColorLight};
  position: fixed;
  right: 1.6rem;
  bottom: 1.6rem;
  visibility: hidden;
  opacity: 0;
  padding: 0.8rem;
  clip-path: circle();
  font-size: 2.4rem;
  line-height: 0;
  transition: 0.3s;
  transform: translateY(100%);
}
.show{
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    
    @media(max-width: 1030px){
      width: 100vw;
      position: relative;
      /* width: 100%; */
      margin: 0;
    }
  }
.showSuport { 
  display: none;
}
.btn_produtos {
  display: flex;
  justify-content: center;
}
.darkIcontoggle {
    
    @media(max-width: 1030px) {
    }
  }
@media (min-width: 1032px){
  nav .menu ul li a.title, .container .menu ul li a.title {
    font: 400 1.6rem "Poppins";
    color: ${props => props.theme.colors.textColor};
  }
  nav .menu ul li a.title, .container .menu ul li a.title:hover {
    color: ${props => props.theme.colors.baseColor};
  }
  
  /* nav .menu ul li a::after, .container .menu ul li a::after {
    position: relative;
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.baseColor};
    transition: width 0.3s;
    top: -3px;
  } */
}
@media (min-width: 1280px){
  #header nav .menu ul li a.title, #header .container .menu ul li a.title {
      font: 400 1.6rem "Poppins", sans-serif;
      color: ${props => props.theme.colors.textColor};
  }
  #header nav .menu ul li a.title, #header .container .menu ul li a.title:hover {
    color: ${props => props.theme.colors.baseColor};
  }
}

.slick-nex {
  background:  ${props => props.theme.colors.bodyColor} !important;
}
.slick-arrow  {
  background:  ${props => props.theme.colors.bodyColor} !important;
}

.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 3rem;
    line-height: 1;
    opacity: .75;
    color: ${props => props.theme.colors.baseColor} !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


.header_container {
  position: relative;
}
`