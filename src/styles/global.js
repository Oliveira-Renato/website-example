import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:Poppins, 'Roboto', -apple-system, sans-serif; 
    scroll-behavior: smooth;
    }
    html {
        font-size: 62.5%;
        min-height: 100%;
    }
    body {
        font-size: 1.6rem;
        min-height: 100vh;
        /* background: linear-gradient(125deg, #256ce1 20%, #00B4AB ); */
        /* background: linear-gradient(125deg, #0269A4 20%, #00B4AB); */
        background: #FFF;
    }

    button {
        color: #FFF;
        background: none;
        border: none;

        &:hover {
            cursor: pointer
        }
    }   
    ul {
        list-style: none;
    }

    section {
        padding: 100px;
        min-height: 100vh;

        /* @media(max-width: 730px){
            padding: 30px;
        } */

    }

     
/* ------LINK,INST,GIT (IMGS) ----------*/
.sci {
    position: absolute;
    left: 100px;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin-right: 10px;
      list-style: none;

      img {
        width: 65px;
        transform: scale(0.5);
        opacity: 0.7;

        &:hover {
          transform: scale(0.8);
          transition: 0.3s;
          opacity: 1;
      }
    }
  }
}


/* ------SOBRE ----------*/
.title {
    width: 100%;
    text-align: center;

    h2 {
        font-size: 2.1rem;
        position: relative;

      @media(min-width: 40em){
        text-transform: uppercase;
        color:#1b87c8;
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: 1px;
      }

      >p {
          max-width: 700px;
          display: inline-block;
      }

      &::before, .skills h2::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
        width: 60px;
        height: 4px;
        background: #FFC40A;
        
        }
    }

    
    }

    .white h2,  p {
        color: #fff;
        margin: 12px;
        
        p{
            font-size:1.4rem;
            margin: 12px;
        }
    }
    &.white h2::before {
        background: #FFC40A;
    }

   

}

@media screen and (max-width: 1200px) {
    html {
        font-size: 56%;
    }
    body {
        font-size: 1.8rem;
    }
}   

@media screen and (max-width: 905px){
      flex-direction: column;
      margin-top: 12px;

        body {
        font-size: 1.8rem;
        }   
    }

@media screen and (max-width: 390px) {
        font-size: 1.700rem;
        }
`