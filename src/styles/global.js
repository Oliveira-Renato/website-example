import { createGlobalStyle } from 'styled-components';


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
  background: ${props => props.theme.colors.bodyColor};
  -webkit-font-smoothing: antialiased;
}//textColorLight

.title {
  font: 700 2.4rem 'Poppins', sans-serif;
  color: ${props => props.theme.colors.titleColor};
  -webkit-font-smoothing: auto;
  
}

.button {
  background-color: ${props => props.theme.colors.baseColor};
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
  background: ${props => props.theme.colors.baseColorAlt};
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
  margin-left: 3.84rem;
  margin-right: 3.84rem;
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
  color: ${props => props.theme.colors.baseColor};
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

  transition: color 0.3s;
}

#header.scroll {
  background-color: ${props => props.theme.colors.bodyColor};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
} 

main {
  margin-top: calc('${props => props.theme.colors.headerHeight}') + 3.2rem);
}


strong {
  color: ${props => props.theme.colors.baseColor};
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

nav ul li a {
    transition: color 0.3s;
    position: relative;
    
}

nav ul li a:hover {
    color: ${props => props.theme.colors.baseColor};
}

nav ul li a::after {
    content: '';
    width: 0%;
    height: 2px;
    background: ${props => props.theme.colors.baseColor};
    position: absolute;
    left: 0;
    bottom: -1.4rem;
    transition: 0.3s;

    @media (max-width: 420px) {
      bottom: -0.4rem;
    }
    @media (max-width: 1024px) {
      bottom: -0.4rem;
    }
    
}

nav ul li a:hover::after {
    width : 100%;
}
    
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
  color: ${props => props.theme.colors.baseColor};

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

#home .image {
  position: relative;
}

#home .image::before {
  content: '';
  height: 100%;
  width: 100%;
  background: ${props => props.theme.colors.baseColorSecond};
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
  background: ${props => props.theme.colors.baseColor};

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
  padding: 2.4rem 1.6rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 0.28rem solid ${props => props.theme.colors.baseColor};
  border-radius: 0.28rem 0.28rem 0 0;
  text-align: center;
}

.card  .icones {
  display: block;
  margin-bottom: 2.4rem;
  font-size: 8rem;
  color: ${props => props.theme.colors.baseColor};
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

  @media (min-width: 280px and min-height: 568px) {
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
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-radius: 0.28rem;
}

#testimonials blockquote p {
  position: relative;
  margin-bottom: 2.4rem;
  text-indent: 1.878rem;
  color: ${props => props.theme.colors.titleColor};
}

#testimonials blockquote p span{
  font: 700 3rem 'Poppins', serif;
  position: absolute;
  left: -1.878rem;
  line-height: 1.628rem;
  color: ${props => props.theme.colors.baseColor};
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
  background: ${props => props.theme.colors.baseColor};
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
  color: ${props => props.theme.colors.baseColor};
  margin-right: 0.878rem;
}

#contact .forms {
  margin: 6.4rem 2.4rem 1.6rem 2.4rem ;
}
/*==== BACK TO TOP ================= */
a.back-to-top {
  background: ${props => props.theme.colors.baseColor};
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

  }

.showSuport {
  display: none;
}


.btn_produtos {
  display: flex;
  justify-content: center;
}




//=====contact form=====  //
#form .button {
  border: none;
  padding: 0 3.2rem;
  height: 4.8rem;
  margin-left: 1rem;
  margin-top: 2.2rem;
}

.contactForm {
  width: 100%;
  
  @media(min-width: 43.5em){
    position: relative;
    width: 700px;
  }


  .row {
    width: 100%;
    display: flex;
    
    
    @media(max-width: 43.5em) {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }

    .col50 {
      width: 100%;
      margin:1rem 1rem 1rem 0;
  }

    .col100 {
      width: 100%;
      margin:1rem 1rem 1rem 0;
      text-align: center;
  }

  input, textarea {
      font: 400 1.6rem 'Poppins',sans-serif;
      width: 100%;
      padding: 1rem;
      border: none;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 0.25rem;
      color: ${props => props.theme.colors.textColor };
      background: ${props => props.theme.colors.bodyColorAlt};
      resize: none;
      box-shadow: 0px 1px 4px ${props => props.theme.colors.baseColorSecond};
      text-align: left;
  }

    textarea {
      margin-left: 5px; 
      height: 100px;

      &::placeholder {
        opacity: 0.5;
      }
    }
  }

}

.send{
  display: flex;
  justify-content: center;
}



//===== SUPORTE =====//
a {
  color: ${props => props.theme.colors.baseColorAlt};
  display: inline-block;
  font-weight: 400;
  text-decoration: none;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight:600;
  text-transform: uppercase;
  display: inline-block;
}

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formcontent {
  border-radius:  10px 10px 10px 10px;
  background:  ${props => props.theme.colors.baseColorAlt};
  width: 100%;
  max-width: 450px;
  position: relative;
  box-shadow: 0px 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

.icon {
  width: 200px;
  margin-bottom: 10px;
}

.icon-2 {
  width: 120px;
  margin-bottom: 10px;
}

.formfooter {
  background-color:  ${props => props.theme.colors.baseColorAlt};
  border-radius: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  border-radius: 0 0 10px 10px;
}

.formfooter a {
  color: ${props => props.theme.colors.titleColor};
  font-weight: 700;
}

h2.active {
  color: ${props => props.theme.colors.titleColor};
  font-size: 20px;
  font-weight: bold;
}

input[type=button], input[type=submit]  
{
  background-color: ${props => props.theme.colors.baseColor};
  border: none;
  color:  ${props => props.theme.colors.baseColorAlt};
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  transition: all 0.5s ease-in-out;
}

.btn:hover {
  cursor: pointer;  
  background-color:${props => props.theme.colors.baseColorAlt};  
}


input 
{
  background-color: ${props => props.theme.colors.bodyColor};
  border: none;
  color: ${props => props.theme.colors.textColor};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 65%;
  border: 2px solid  ${props => props.theme.colors.baseColorAlt};
  transition: all 0.5s ease-in-out;
  border-radius: 5px 5px 5px 5px;

  
  
}

input:focus
{
  background-color:  ${props => props.theme.colors.baseColorAlt};
  border-bottom: 2px solid ${props => props.theme.colors.baseColor};

  

}

input::placeholder
{
  color: #cccccc;
}

*:focus {
  outline: none;
}

@media (max-width: 600px) {
  input {
    width: 80%;
  }
}



//=====ANIMATION=====  //
.typewriter {
  padding: 0;
  display: flex;
  margin: 0;

}
.typewriter h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .58125rem solid ${props => props.theme.colors.baseColorAlt}; 
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .58125rem; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;

}

@media (max-width: 380px) {
  .typewriter h1 {
    letter-spacing: .3rem;
  }
  
}

  


/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 70% }
}


/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: ${props => props.theme.colors.baseColor}}
}


@media (min-width: 912px) {
  @keyframes typing {
    from { width: 0 }
    to { width: 92% }
  }
}



@media (min-width: 1400px) {
  @keyframes typing {
    from { width: 0 }
    to { width: 88% }
  }
}


@media (min-width: 1400px) {
  @keyframes typing {
    from { width: 0 }
    to { width: 88% }
  }
}





/*==== FOOTER ================= */
#footer{
	background-color: ${props => props.theme.colors.baseColor};
  padding: 8rem 0 0;
  position: absolute;
  width: 100%;

  z-index: 0;
  .container {
    
  }
  
	.row{
    display: flex;
    flex-wrap: wrap;
  }
  

  .copyRight{
    margin-top:  7rem;
    background: ${props => props.theme.colors.baseColorAlt};
    color: #FFF;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-height:  4rem; 
    justify-content:center;
    align-items:center;
    bottom: 0;
    font-size:  1rem;
    z-index: 0;
  }

}

.footer-col{
        
  width: 25%;

 

  h4{
    font-size: 1.8rem;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 2.1875rem;
    font-weight: 500;
    position: relative;

    &::before{
      content: '';
      position: absolute;
      left:0;
      bottom: -1rem;
      background-color: ${props => props.theme.colors.textColorLight};
      height: 0.125rem;
      box-sizing: border-box;
      width: 5rem;
    }
  }

  
  ul{
    list-style: none;

    li {
      &:not(:last-child){
        margin-bottom:  1rem;
        font-size: 1.5rem;
        margin-right:  1rem;
      }

      a{
        font-size: 1.6rem;
        text-transform: capitalize;
        text-decoration: none;
        font-weight: 300;
        color: ${props => props.theme.colors.textColorLight};
        display: block;
        transition: all 0.3s ease;

        &:hover{
          
          padding-left: 0.5rem;
        }

        

      }

    }
  }


  .social-links{

    .socialmedia {
      font-size: 2.4rem;
      object-fit: cover;
      margin-right:  1rem;
    }

    a{
      display: inline-block;
      margin:0  1rem  1rem 0;
      text-align: center;
      line-height:  4rem;
      color: #FFF;
      transition: all 0.5s ease;  

      &:hover{
        color: ${props => props.theme.colors.barLoadingColor};
      }
    }


  }

}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 3.2rem;
    
  }
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
    text-align: center;
    

    h4::before {
     left: auto;
     width: 5rem;
    }
  }

  .footer-col .social-links a {
    margin: 0  1rem  1rem  1rem;
    text-align: center;

  }

  ul {
    padding: 0;
  }
  
}













/*========= MEDIA QUERIES =========*/


/*================ EXTRA SMALL DEVICES ====================*/
@media (max-width:320px) {
  body {
    font: 400 1.44rem 'Poppins',sans-serif;
  }
  
  nav, .container {
    // max-width: 1366px;
    margin-left: 11.2rem;
    margin-right: 11.2rem;
    a {
      .logo {
        img {
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
      }
    }
    .suport_btn{
      display: none;
    }
  }
  
  #home, #about, #products, #testimonials, #contact{
      .section {
        padding: 9.6rem 0;
      }
      .container {
        
          h2,h3 {
            font: 700 1.39rem 'Poppins',sans-serif;
            color: ${props => props.theme.colors.titleColor};
            
          
        }
      }
    
  }
  

}

@media (min-width:320px) {
  body {
    font: 400 1rem 'Poppins',sans-serif;
  }
  
  nav, .container {
    // max-width: 1366px;
    margin-left: 11.2rem;
    margin-right: 11.2rem;
    
    .suport_btn{
      display: none;
    }
  }
}

/*================ TABLET ====================*/
@media (min-width: 650px) {
  body {
    font: 400 1rem 'Poppins',sans-serif;
  }
  
  nav, .container {
    // max-width: 1366px;
    margin-left: 11.2rem; 
    margin-right: 11.2rem;
    
    .suport_btn{
      display: none;
    }
  }  

  section .title {
    
    font-size: 2.92rem;
  }
  /* layout */
  main {

    margin-top: ${props => props.theme.colors.headerHeight};
    
    .section, +#contact {
      
      .container {

        header .title, header p {
          // max-width: 32rem;
          text-align: center;

        }

        .image {
          
          img {
            
          }
        }

        .text {
          width: 100%;
          text-align: left;
        
            
        }
        
        
        
        .cards{
         

          .card {
            padding-left: 4.8rem;
            padding-right: 4.8rem;
          }
        }

      }
    }

    //===== HOME =====\\
    #home {
      // margin: 0 11.2rem;
      // padding: 16rem 0;

      .container {
        

        .text {

          p {
            margin-left: 2.4rem;
            margin-right: 2.4rem;
          }
        }

        .image {
          display: flex;
          justify-content: center;
          position: relative;
          align-items: center;

          img {
            max-width: 570px;
            right: -1.2rem;
            
            
          }
          &::before {
            max-width: 100%;
            height: 100%;
            top: -12.8%;
            left: 38%;

          }
        }

        .text {
          
          margin-bottom: 2.4rem;
          margin: 0 auto;
          >h2 {
            margin-bottom: 0rem;
            // font-size: 2.11.2rem;

          }

          >p {
            margin-top: 0rem;
          }

          .button {
            padding: 0 3.5rem;
          }
        }
      }
    }
    
    //===== ABOUT =====\\
    #about {
      .container {
        margin: 0 5rem;
        
        .image {
          order: 0;
          max-width: 570px;
          right: -4rem;
          position: relative;

          &::before {
            content: '';
            height: 100%;
            width: 100%;
            background: ${props => props.theme.colors.baseColor};
            position: absolute;
            top: -12.3%;
            left: -14%;
            z-index: 0;
          }
        }

        .text { 
          
          font-size: 1.6rem;
          text-align: left;
          margin: 0 auto;
          
          h2 {
            position: relative;

            &::before {
              content: '';
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -4px;
              width: 120px;
              height: 4px;
              background: ${props => props.theme.colors.baseColor};
            }
          }
        }
      }
    }

    //===== PRODUCTS =====\\
    #products {
      
      .container {
        padding: 0 9.6rem;

      
          header {
            text-align: center;
          }
          
         
        
        h2 {
          position: relative;

          &::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -5px;
            width: 60px;
            height: 4px;
            background: ${props => props.theme.colors.baseColor};
          }
          
        }
      }
    }

    //===== TESTIMONIALS =====\\
    #testimonials {
      .container {
        header {
          text-align: center;
        }
      }
    }
    //===== CONTACTS =====\\
    #contact {

      .container {
        padding: 0;
        grid-auto-flow: column;
        align-items: center;
        grid-template-columns: repeat(auto-fit, 50%);


        .text {
          max-width: 25rem;
          

          h2 {
          text-align:left;
           
            
          }
          p {
            margin-bottom: 3.2rem;
          }
        }

        #form {
          display: grid;
          justify-content: center;
          flex-wrap: wrap;


          >h2 {
            text-align: center;
            position: relative;

            &::before {
              content: '';
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -5px;
              width: 60px;
              height: 4px;
              background: ${props => props.theme.colors.baseColor};
            }
          }

          

          .send {
            .button {
              padding: 0 3.5rem;
              margin-left: 0;
            }
          }
        }

        
      }
      .grid {
        gap: 6.4rem;
      }
    }


    .swiper-slide {
      width: 50% !important;
    }

    

  }

  
  #footer {
    .footer-col {
      padding: 0 0 0 1rem;
    }
  }


}


/*================ NOTEBOOK ====================*/
@media (min-width: 912px) {
  body {
    font: 400 1rem 'Poppins',sans-serif;
  }
  
  nav, .container {
    // max-width: 1366px;
    margin-left: 11.2rem;
    margin-right: 11.2rem;
    
    .suport_btn{
      display: none;
    }
  }  

  section .title {
    font-size: 2.92rem;
  }
  /* layout */
  main {

    margin-top: ${props => props.theme.colors.headerHeight};
    
    .section, +#contact {
      
      .container {

        

        header .title, header p {
          // max-width: 32rem;
          text-align: center;

        }

        .image {
          
          img {
            
          }
        }

        .text {
          width: 100%;
          text-align: left;
        
            
        }
        
        
        
        .cards{
         

          .card {
            padding-left: 4.8rem;
            padding-right: 4.8rem;
          }
        }

      }
    }

    //===== HOME =====\\
    #home {
      // margin: 0 11.2rem;
      // padding: 16rem 0;

      .container {
        padding: 4rem 0;
        grid-auto-flow: column;
        justify-content: space-between;
        margin: 0 auto;

        .text {
          width: 60%;
          p {
            margin-left: 2.4rem;
            margin-right: 2.4rem;
          }
        }

        .image {
          order: 1;
          display: flex;
          justify-content: center;
          position: relative;
          align-items: center;

          img {
            max-width: 570px;
            right: -1.2rem;
            
            
          }
          &::before {
            
            width: 100%;
            height: 100%;
            left: 7rem;
            top: -6rem;
        
          }
        }

        .text {
          min-width: 100%;
          margin-bottom: 2.4rem;
          margin: 0 auto;
          >h2 {
            margin-bottom: 0rem;
            // font-size: 2.11.2rem;

          }

          >p {
            margin-top: 0rem;
          }

          .button {
            padding: 0 3.5rem;
          }
        }
      }
    }
    
    //===== ABOUT =====\\
    #about {
      .container {
        
        padding: 1.2rem 0;
        grid-auto-flow: column;
        justify-content: space-between;
        // gap: 0;;
        
        .image_about {
          order: 0;
          width: 500px;
          position: relative;
          left: 0;
          top: 5rem;
          

          &::before {
            content: "";
            height: 65%;
            width: 100%;
            background: ${props => props.theme.colors.baseColor};
            position: absolute;
            top: -6.7%;
            left: -14%;
            z-index: 0;
          }
        }

        .text { 
          
          font-size: 1.6rem;
          text-align: left;
          width: 100%;
          
          h2 {
            position: relative;

            &::before {
              content: '';
              position: absolute;
              transform: translateX(-50%);
              bottom: -4px;
              width: 120px;
              height: 4px;
              left: 6rem;
              background: ${props => props.theme.colors.baseColor};
            }
          }
        }
      }
    }

    //===== PRODUCTS =====\\
    #products {
     

      .container {
        padding: 0 9.6rem;
        
        h2 {
          position: relative;

          &::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -5px;
            width: 60px;
            height: 4px;
            background: ${props => props.theme.colors.baseColor};
          }
          
        }
      }
    }
    //===== CONTACTS =====\\
    #contact {

      .container {
        grid-auto-flow: column;
        align-items: center;
        grid-template-columns: repeat(auto-fit, 50%);


        .text {
          max-width: 100%;

          h2 {
           
            
          }
          p {
            margin-bottom: 3.2rem;
          }
        }

        #form {
          display: grid;
          justify-content: center;
          flex-wrap: wrap;


          >h2 {
            text-align: center;
            position: relative;

            &::before {
              content: '';
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -5px;
              width: 60px;
              height: 4px;
              background: ${props => props.theme.colors.baseColor};
            }
          }

          

          .send {
            .button {
              padding: 0 3.5rem;
              margin-left: 0;
            }
          }
        }

        
      }
      .grid {
        gap: 6.4rem;
      }
    }


    .swiper-slide {
      width: 50% !important;
    }

    

  }

  
  #footer {
    .footer-col {
      padding: 0 0 0 1rem;
    }
  }

}


/*================ NOTEBOOK ====================*/
@media (min-width: 1032px) {

  body {
    font: 400 1rem 'Poppins',sans-serif;
  }
  
  #header {
    margin-bottom: 0;

    .container {
      justify-content: left;
    }
  }
  
  nav, .container {
    // max-width: 1366px; 
    margin-left: 11.2rem;
    margin-right: 11.2rem;
    gap: 10rem;

    .toggle {
      display: none;
      visibility: hidden;

      
    }

    .suport_btn {
      display: block;   
      position: absolute;
      right: 3.84rem;
  
    }  
    

    .logo{
      margin: 1.4375rem 0 1.4375rem  0;
    }

    .menu {
      opacity: 1;
      visibility: visible;
      top: 0;

      ul {
        display: flex;
        gap: 3.2rem;

        li{

          a { 
            
            &.title {
              font: 400 1.6rem  'Poppins';
              color: ${props => props.theme.colors.textColor};
              
        
            }

            &::after{
              position: relative;
              content: "";
              display: block;
              width: 0;
              height: 2px;
              background: ${props => props.theme.colors.baseColor};
              transition: width 0.3s;
              top: -3px;
            
            }
            
            &:hover::after{
              width: 100%;
              transition: width .3s;
            }
          }
        }
        
      }
      
    }
    
    
  }  
  /* layout */
  main {
    .section {
      padding:11.2rem 3.2rem;
      height: 100%;
    }

    .section, +#contact {
      

      .container {
        padding: 14.4rem 6.4rem;


        header .title, header p {
          // max-width: 32rem;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .image {
          order: 1;
          
          // max-width: 800px;
          &::before {
            
          }
         
        }

        .text {
          order: 0;
          text-align: left;
        }
        
        
        
        .cards{
          grid-template-columns: 1fr 1fr 1fr;

          .card {
            padding-left: 4.8rem;
            padding-right: 4.8rem;
          }
        }

      }
     
    }

    //===== HOME =====\\
    #home {
      // margin: 0 11.2rem;
      padding: 0;

      .container {
        grid-auto-flow: column;
        justify-content: space-between;
        margin: 0 auto;

        .image {

          img {
            // max-width: 480px;
            right: -1.2rem;

          }

          &::before { 
            max-width: 100%;
            height: 90%;
            top: -8.8%;

          }
        }

        .text {
          margin-bottom: 2.4rem;
          
          >h2 {
            margin-bottom: 0rem;
            // font-size: 2.11.2rem;

          }

          >p {
            margin-top: 3.2rem;
          }

          .button {
            padding: 0 3.5rem;
          }
        }
      }
    }
    
    //===== ABOUT =====\\
    // #about {
    //   padding: 0;
    //   .container {
    //     grid-auto-flow: column;
    //     justify-content:baseline;
    //     margin: 0 auto;

    //     .image {
    //       order: 0;
          

    //       img {
    //         max-width: 100%;
    //         height: auto; 
    //       }

    //       &::before {
    //         height: 100%;
    //         bottom: -8.3%;
    //         top: -12.3%;
    //         left: -40%;
    //       }
    //     }

    //     .text {
    //       max-width: 100%;
    //       text-align: left;
    //       font-size: 0.89.6rem;
    //       position: relative;
    //       left: -40%;
          
    //       h2 {
    //         position: relative;

    //         &::before {
    //           content: '';
    //           position: absolute;
    //           transform: translateX(-50%);
    //           bottom: -4px;
    //           width: 120px;
    //           height: 4px;
    //           background: ${props => props.theme.colors.baseColor};
    //         }
    //       }
    //     }
    //   }
    // }

    //===== PRODUCTS =====\\
    #products {
      padding: 5rem 0 ;
      .container {
        padding: 3.2rem 3.2rem;

        .card {
          padding: 2.4rem 2.4rem;
        }
        h2 {
          position: relative;

          &::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -5px;
            width: 60px;
            height: 4px;
            background: ${props => props.theme.colors.baseColor};
          }
          
        }
      }
    }

    #testimonials {

        .container {
          padding: 0;
        }
      
    }
    //===== CONTACTS =====\\
    #contact {
      padding: 11.2rem 11.2rem;

      .container {
        grid-auto-flow: column;
        align-items: center;
        grid-template-columns: repeat(auto-fit, 45%);


        .text {
          max-width: 25rem;

          h2 {
           
            
          }
          p {
            margin-bottom: 3.2rem;
          }
        }

        #form {
          display: grid;
          justify-content: center;
          flex-wrap: wrap;


          >h2 {
            text-align: center;
            position: relative;

            &::before {
              content: '';
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -5px;
              width: 60px;
              height: 4px;
              background: ${props => props.theme.colors.baseColor};
            }
          }

          

          .send {
            .button {
              padding: 0 3.5rem;
              margin-left: 0;
            }
          }
        }

        
      }
      .grid {
        gap: 6.4rem;
      }
    }


    .swiper-slide {
      width: 50% !important;
    }

    

  }

  
  #footer {
    .footer-col {
      padding: 0 0 0 6.4rem;
    }
  }



}



/*================ EXTRA LARGE COMPUTERS ====================*/
@media (min-width: 1280px) {
  body {
    font: 400 1.05rem 'Poppins',sans-serif;
  }

  #header {
    
    nav, .container {
      margin-left: 11.2rem;
      margin-right: 3.5rem;
      justify-content: left;

      .suport_btn {
        position: absolute;
        position: absolute;
        right: 11.2rem;

        .icones {
          font-size: 1.05rem;
          margin-right: 0.625rem;
        }
      }

      .logo{
        margin: 1.4375rem 0 1.4375rem  0;
      }
      .menu {
        opacity: 1;
        visibility: visible;
        top: 0;

        ul {
          display: flex;
          gap: 3.2rem;

          li{

            a { 
              position: unset;
              &.title {
                font: 400 1.6rem "Poppins", sans-serif;
                color: ${props => props.theme.colors.textColor};
                
              }
            }
          }
        }
    
      }

      .toggle {
        display: none;
      }
    }
  }


 
  /* layout */
  main {

    margin-top: ${props => props.theme.colors.headerHeight};

    

    .section, +#contact {
      

      .container {
        
        header .title, header p {
          max-width: 32rem;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .image {
          order: 1;
          
        }

        .text {
          order: 0;
          max-width: 24rem;
          text-align: left;
        }

        
        .links {
          ul {
            
            li {
              
            }
          }
        }
        .cards{
          grid-template-columns: 1fr 1fr 1fr;

          .card {
            padding-left: 4.8rem;
            padding-right: 4.8rem;
          }
        }


      }
    }

    //===== HOME =====\\
    #home {
      margin: 0 3.5rem;
      padding: 11.2rem 0;

      .container {
        grid-auto-flow: column;
        justify-content: center;
        gap: 5rem;


        .image {
          right: -0.011.2rem;

          img {
            
          } 

          &::before{
            width: 100%;
            height: 100%;
            top: -12.8%;
          }
        }

        .text {
          margin-bottom: 2.4rem;
          max-width: 100%;
          
          >h2 {
            margin-bottom: 0rem;
            font-size: 2.1rem;

          }

          >p {
            margin-top: 3.2rem;
          }

          .button {
            padding: 0 3.5rem;
          }
        }
      }
    }
    
    //===== ABOUT =====\\
     #about {
      

      .container {
        gap: 4rem;
        padding: 11.2rem 0;

         .image {
           order: 0;
           max-width: 100%;
           height: 100%;   

           &::before {
            content: "";
            height: 73%;
            width: 100%;
            background: ${props => props.theme.colors.baseColor};
            position: absolute;
            top: -12.7%;
            left: -14%;
            z-index: 0;
           }
         }

         .text {
           left: 0;
           max-width: 90%;
          
           h2 {
             position: relative;

             &::before {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: -4px;
                width: 120px;
                height: 4px;
                background: ${props => props.theme.colors.baseColor};
             }
           }
         }
       }
     }

    //===== PRODUCTS =====\\
    #products {
      .container {
        padding: 3.2rem 4.8rem;

        header {

          p {
            max-width: 100%; 
          } 
        }
        h2 {
          position: relative;

          

          &::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -5px;
            width: 60px;
            height: 4px;
            background: ${props => props.theme.colors.baseColor};
          }
          
        }
      }
    }
    //===== CONTACTS =====\\
    #contact {

      .container {
        padding: 3.2rem 11.2rem;
        grid-auto-flow: column;
        align-items: center;
        grid-template-columns: repeat(auto-fit, 45%);


        .text {
          max-width: 25rem;

          h2 {
           
            
          }
          p {
            margin-bottom: 3.2rem;
          }
        }

        #form {
          display: grid;
          justify-content: center;
          flex-wrap: wrap;


          >h2 {
            text-align: center;
            position: relative;

            &::before {
              content: '';
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -5px;
              width: 60px;
              height: 4px;
              background: ${props => props.theme.colors.baseColor};
            }
          }

          

          .send {
            .button {
              padding: 0 3.5rem;
              margin-left: 0;
            }
          }
        }

        
      }
      .grid {
        gap: 6.4rem;
      }
    }


    .swiper-slide {
      width: 50% !important;
    }

    

  }

  
  #footer {
    .footer-col {
      padding: 0 0 0 11.2rem;
    }
  }
  
 
  
}


/*================ EXTRA LARGE COMPUTERS ====================*/
@media (min-width: 1400px) {

  #header nav, #header .container {
    margin-left: 11.2rem;
    margin-right: 11.2rem;
    justify-content: left; 
  }
  /* layout */
  main {
    margin-top: ${props => props.theme.colors.headerHeight};

    section {
      padding: 0;
      margin: 0;
    }
    

    .section, +#contact {
      

      .container {
        
        header .title, header p {
          max-width: 100%;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .image {
          order: 1;
          
        }

        .text {
          order: 0;
          max-width: 24rem;
          text-align: left;
        }

        
        .links {
          ul {
            
            li {
              
            }
          }
        }
        .cards{
          grid-template-columns: 1fr 1fr 1fr;

          .card {
            padding-left: 4.8rem;
            padding-right: 4.8rem;
          }
        }


      }
    }

    //===== HOME =====\\
    #home {
      margin: 0 3.5rem;

     
      .container {
        grid-auto-flow: column;
        justify-content:center;
        margin: 0 auto;
        gap: 20rem;
        padding: 11.4rem 6.4rem;

        .image {
          right: -1.12rem;

          img {
            
          } 

          &::before{
            width: 100%;
            height: 100%;
            top: -12.8%;
          }
        }

        .text {
          .title {
            font-size: 2.8rem;
          }

          font-size: 1.6rem;
          margin-bottom: 2.4rem;
          max-width: 47rem;
        
          
          >h2 {
            margin-bottom: 0rem;
            font-size: 1.2rem;

          }

          >p {
            margin-top: 3.2rem;
          }

          .button {
            padding: 0 3.5rem;
          }
        }
      }
    }
    
    //===== ABOUT =====\\
    #about {
      
      padding: 11.2rem;

      .container {
        gap: 0;
        grid-auto-flow: column;
        justify-content: center;
        // margin: 0 11.2rem;
         

        .image {
          order: 0;
          // min-width: 570px;
          // max-width: 710px;

          img {   
            max-width: 100%;     
          }

          &::before {
            content: "";
                height: 73%;
                width: 100%;
                background: ${props => props.theme.colors.baseColor};
                position: absolute;
                top: -12.7%;
                left: -14%;
                z-index: 0;
          }
        }

        .text {
          left: -3rem;
          max-width: 80%;
          
          h2 {
            position: relative;

            &::before {
            
              
            }
          }
        }
      }
    }

    //===== PRODUCTS =====\\
    #products {
      .container {
        padding: 14.4rem 6.4rem;

        h2 {
          position: relative;

          &::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -5px;
            width: 60px;
            height: 4px;
            background: ${props => props.theme.colors.baseColor};
          }
          
        }
      }
    }

    #testimonials {
      .container {
        padding: 14.4rem 6.4rem;
      }
    }
    //===== CONTACTS =====\\
    #contact {

      .container {
        padding: 3.2rem 11.2rem;
        grid-auto-flow: column;
        align-items: center;
        grid-template-columns: repeat(auto-fit, 45%);


        .text {
          max-width: 47rem;

          h2 {
           
            
          }
          p {
            margin-bottom: 3.2rem;
          }
        }

        #form {
          display: grid;
          justify-content: center;
          flex-wrap: wrap;


          >h2 {
            text-align: center;
            position: relative;

            &::before {
              content: '';
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -5px;
              width: 60px;
              height: 4px;
              background: ${props => props.theme.colors.baseColor};
            }
          }

          

          .send {
            .button {
              padding: 0 3.5rem;
              margin-left: 0;
            }
          }
        }

        
      }
      .grid {
        gap: 6.4rem;
      }
    }


    .swiper-slide {
      width: 50% !important;
    }

    

  }

  
  #footer {
    .footer-col {
      padding: 0 0 0 11.2rem;

    }
  }
  
 
  
}


/*================ EXTRA EXTRA  LARGE COMPUTERS ====================*/
@media (min-width: 1680px) { 
  main {
    #about {
      padding: 16.9rem;

      .container {
        margin: 0 11.2rem;
        .image {
          
          img {
            width: 100%;

            
          }
          &::before {
            height: 85%;
          }
        }
      }
    }
  }
}


`