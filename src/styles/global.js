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
  font: 400 1rem 'DM Sans', sans-serif;
  color: var(--text-color);
  background: var(--body-color);
  -webkit-font-smoothing: antialiased;
}

.title {
  font: 700 1.875rem 'Poppins', sans-serif;
  color: var(--title-color);
  -webkit-font-smoothing: auto;
}

.button {
  background-color: var(--base-color);
  color: var(--text-color-light);
  height: 3.5rem;
  display: inline-flex;
  align-items: center;
  padding: 0 2rem;
  border-radius: 0.25rem;
  font: 500 1rem 'DM Sans', sans-serif;
  transition: background 0.5s;
  cursor: pointer;
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
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.grid {
  display: grid;
  gap: 2rem;
}

.section {
  padding: 5rem 0;
}

.section .title {
  margin-bottom: 1rem;
}

.section header {
  margin-bottom: 4rem;
}

.section header strong {
  color: var(--base-color);
}

#header {
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 2rem;
  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: transparent;
  width: 100%;

  transition: color 0.2s;
}

#header.scroll {
  background-color: var(--body-color);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
} 

main {
  margin-top: calc(var(--header-height) + 2rem);
}

/*====  LOGO ============================ */
nav a .logo  img {
  position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    padding: 0;
    border: none;
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    min-width: 100%;
    max-width: 100%;
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
    bottom: -1.5rem;

    transition: 0.5s;
    
}

nav ul li a:hover::after {
    width : 100%;
}
    
nav .menu{
    opacity: 0;
    visibility: hidden;

    
    display: none;
    transition: 0.3s;
}

/*=========== toggle menu ==========*/

nav .close {
  visibility: hidden;
  opacity: 0;

  position: absolute;
  top: -1.5rem;
  right: 1.5rem;

  transition: 0.3s;
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
  right: 2.93rem;
}

#home .image img,
#home .image::before {
  border-radius: 0.25rem;
}

#home .text {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  text-align: center;
}

#home .text h1 {
  margin-bottom: 1rem;
}

#home .text p {
  margin-bottom: 2rem;
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
  border-radius: 0.25rem;
}

#about .text {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}


/*====  SERVICES ============================ */
.cards.grid {
  gap: 1.5rem;
}

.card {
  padding: 3.625rem 2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 0.25rem solid var(--base-color);
  border-radius: 0.25rem 0.25rem 0 0;
  text-align: center;
}

.card  .icones {
  display: block;
  margin-bottom: 1.5rem;
  font-size: 5rem;
  color: var(--base-color);
}

.card .title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

/*====  TESTIMONIALS ================= */



`