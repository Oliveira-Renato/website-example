import { createGlobalStyle } from 'styled-components';
import './variables.css'

export default createGlobalStyle`
/*======INICIAL=========================== */
* {
margin: 0;
padding: 0;
box-sizing: border-box;

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
  text-transform: uppercase;
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
  transition: background 0.3s;
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

#header {
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 2rem;
  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: var(--body-color);
  width: 100%;
}

/*====  LOGO ============================ */
.logo img {
    width: 100%;
    position: relative;
    left: 0;
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
    transition: color 0.3s;
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
    
}

nav ul li a:hover::after {
    width : 100%;
}
    
nav .menu{
    opacity: 0;
    visibility: hidden;
}



/*====MOSTRAR MENU======= */
nav.show .menu {
    opacity: 1;
    visibility:visible;

    background: var(--body-color);
    height: 100vh;
    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;
}

nav.show .menu {
    display: grid;
    place-content: center;
}

nav.show ul.grid  {
    gap: 4rem;
}



/*====  HOME ============================ */
main {
  margin-top: calc(var(--header-height) + 2rem);
}

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

    
`