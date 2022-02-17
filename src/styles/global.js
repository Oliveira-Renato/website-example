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
        background: #fff;
    }
    body {
        font-size: 1.6rem;
        min-height: 100vh;
        background: linear-gradient(125deg, #256ce1 20%, #00B4AB );
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
    text-transform: uppercase;
      position: relative;
      color:#5782ab;
      font-family: "Intro-Bold";
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: 1px;

      p {
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

    &.black p {
        color:#333;
    }

    &.white h2, p {
        color: #fff;
    
    }
    &.white h2::before {
        background: #fff;
    }


}

`