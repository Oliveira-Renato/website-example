import { createGlobalStyle } from 'styled-components';
import './variables.css'

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
  color: var(--text-color);
  background: var(--body-color);
  -webkit-font-smoothing: antialiased;
}

.title {
  font: 700 1.878rem 'Poppins', sans-serif;
  color: var(--title-color);
  -webkit-font-smoothing: auto;
}

.button {
  background-color: var(--base-color);
  color: var(--text-color-light);
  height: 5.6rem;
  display: inline-flex;
  align-items: center;
  padding: 0 3.2rem;
  border-radius: 0.28rem;
  font: 500 1.6rem 'DM Sans', sans-serif;
  transition: background 0.5s;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
}

.button:hover {
  background: var(--base-color-alt);
}

.divider-1 {
  height: 1px;
  background: linear-gradient(
    270deg,
    hsla(var(--hue), 36%, 57%, 1) 0%,
    hsla(var(--hue), 65%, 88%, 0.34) 100%
  );
}

.divider-2 {
  height: 1px;
  background: linear-gradient(
    270deg,
    hsla(var(--hue), 65%, 88%, 0.34),
    hsla(var(--hue),36%, 57%, 1) 
  );
}

/*====  LAYOUT ============================ */
.container {
  margin-left: 2.4rem;
  margin-right: 2.4rem;
  justify-content: space-between;
}

.grid {
  display: grid;
  gap: 3.2rem;
}

.section {
  padding: 8rem 0;
}

.section .title {
  margin-bottom: 1.6rem;
}

.section header {
  margin-bottom: 6.4rem;
}

.section header strong {
  color: var(--base-color);
}

#header {
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 3.2rem;
  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: transparent;
  width: 100%;

  transition: color 0.5s;
}

#header.scroll {
  background-color: var(--body-color);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
} 

main {
  margin-top: calc(var(--header-height) + 3.2rem);
}

/*====  LOGO ============================ */
nav a.logo  img {
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
} 

/*====  NAVIGATION ============================ */
nav {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

nav ul li {
  
    text-align: center;
}

nav ul li a {
    transition: color 0.5s;
    position: relative;
    
}

nav ul li a:hover {
    color: var(--base-color);
}

nav ul li a::after {
    content: '';
    width: 0%;
    height: 2px;
    background: var(--base-color);

    position: absolute;
    left: 0;
    bottom: -2.4rem;

    transition: 0.5s;
    
}

nav ul li a:hover::after {
    width : 100%;
}
    
nav .menu{
    opacity: 0;
    visibility: hidden;
    top: -32rem;
    transition: 0.5s;
}

nav .menu ul {
  display: none;
}

/*=========== toggle menu ==========*/

.icones {

  font-size: 1.08rem;
  margin-right: 1.048rem;
        
}


nav .close {
  visibility: hidden;
  opacity: 0;

  position: absolute;
  top: -2.4rem;
  right: 2.4rem;

  transition: 0.5s;
}

/*====  HOME ============================ */


#home {
  overflow: hidden;
}

#home .container {
  margin: 0;
}

#home .image {
  position: relative;
}

#home .image::before {
  content: '';
  height: 100%;
  width: 100%;
  background: var(--base-color-second);
  position: absolute;
  top: -16.8%;
  left: 16.7%;
  z-index: 0;
}

#home .image img {
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
  background: white;
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
  background: var(--base-color);

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


/*====  SERVICES ============================ */
.cards.grid {
  gap: 2.4rem;
}

.card {
  padding: 5.804rem 3.2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 0.28rem solid var(--base-color);
  border-radius: 0.28rem 0.28rem 0 0;
  text-align: center;
}

.card  .icones {
  display: block;
  margin-bottom: 2.4rem;
  font-size: 8rem;
  color: var(--base-color);
}



.card .title {
  font-size: 2.4rem;
  margin-bottom: 1.248rem;
}

/*====  TESTIMONIALS ================= */
#testimonials {
  background: white;
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
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-radius: 0.28rem;
}

#testimonials blockquote p {
  position: relative;
  margin-bottom: 2.4rem;
  text-indent: 1.878rem;
  color: var(--title-color);
}

#testimonials blockquote p span{
  font: 700 3rem serif;
  position: absolute;
  left: -1.878rem;
  line-height: 1.628rem;
  color: var(--base-color);
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
  background: var(--base-color);
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
  color: var(--base-color);
  margin-right: 0.878rem;
}

#contact .forms {
  margin: 6.4rem 2.4rem 1.6rem 2.4rem ;
}
/*==== BACK TO TOP ================= */
a.back-to-top {
  background: var(--base-color);
  color: var(--text-color-light);

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

  }

.showSuport {
  display: none ;
}


`