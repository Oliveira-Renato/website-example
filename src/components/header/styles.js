import styled from 'styled-components';

export const ContainerHeader = styled.div`
  /*====MOSTRAR MENU======= */
nav.show .menu {
  opacity: 1;
  visibility:visible;
  background: ${props => props.theme.colors.bodyColor};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  //left: -3.84rem;
  
}
nav.show .menu {
  display: grid;
  place-content: center;
}
nav.show .menu ul {
  display: grid;
}
nav.show ul.grid  {
  gap: 1.6rem;
}

//=====================================
.sub-menu {
  height: 100%;
  z-index: 99999;

  >a {
    cursor: pointer;
    svg {
      padding-left: 0.675rem;
    }
  }
  
  &.sub-clicked {
    .sub-menu-content {
      visibility: visible ;
      transition:0.3s ;
      opacity: 1;
      background-color: ${props => props.theme.colors.baseColor};
      padding: 2rem  0.675rem;
      z-index: 20000;

      li {
        width: 100%;
        position: relative;

        a {
          text-align: left;
          &:hover {

            :after {
              content: '';
              transition: 0.3s;
              position: absolute;
              width: 6px;
              height: 1.9rem;
              color: white;
              background-color: white;
              bottom: 0;
              right: 0;
            }
          }
        }
      }
    }
  }

  .sub-menu-content {
    position:absolute;
    /* border: 0mm ridge ${props => props.theme.colors.baseColor}; */
    width: 240px ;
    background: ${props => props.theme.colors.bodyColor}; 
    transition:0.3s ;
    opacity: 0 ;
    visibility: hidden;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    

    @media(max-width:1032px){
      position:fixed;
      left: 40%;
      opacity:1;
      width: 220PX ;
      z-index:150;
    }  
    @media(max-width:766px){
      width: 180px;
      left: 25%;
    }

    li {
      a {
        color: ${props => props.theme.colors.textColorLight} !important;
        text-align: left;
      }
    }
  }
}


nav.show div.close {
  visibility: visible;
  opacity: 1;
  top: auto;
  right: -0.16rem;
}
nav a.logo img {
    min-width: 120px;
    max-width: 140px;
    min-height: 100%;
    max-height: 100%;
    object-fit: contain;
    margin-top: 1.6rem;
    resize: none;
    
}
/*======== TOGGLE MENU =============*/
.darkIcontoggle {

    @media(max-width: 1032px) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-around;
    }
  }
.ainda_nao {
  //margin-top: 3.2rem;
  @media (min-width: 1032px) {
   // position: absolute;
    right: 0rem;
    top: -2.5rem;
  }
  @media (min-width: 1232px) {
    //position: absolute;
    right: 9rem;
    top: -2.5rem;
  }
  .btn2{
    padding: 0 3.2rem;
    &:hover {
      color: ${props => props.theme.colors.bodyColor};
    }
    &:hover::after{
      width: 0;
      }
    }
  }

.login_btn {
  justify-content:center;
  text-align: center;
  font: 700 1.878rem 'Poppins',sans-serif;
  
  @media (min-width: 1032px) {
    position: absolute;
    right: 18rem;
    top: -1rem;
    span {
      color: ${props => props.theme.colors.textColor};
      font-weight: 400;
    }
  }
  
  @media (min-width: 1230px) {
    right: 28rem;
  }
  
  @media (min-width: 1280px) {
    right: 28rem;
    top: -1rem;
  }
  
  @media (min-width: 1400px) {
    right: 28rem;
    top: -1rem;
  }
  span {
    margin-left: 0.5rem;
    color: ${props => props.theme.colors.textColor};
  }
  .login_icon {
    color: ${props => props.theme.colors.baseColor};
  }
}
@media (max-width: 375px) {
 .title {
    font: 700 1.675rem 'Poppins',sans-serif;
      color: ${props => props.theme.colors.titleColor};
      -webkit-font-smoothing: auto;
    }
    nav.show ul.grid {
      gap: 2rem;
    }
    /* .ainda_nao {
      text-align: center;
      margin-top: 3.4rem;
    } */
}
/*================ EXTRA SMALL DEVICES ====================*/
@media (max-width:420px) {
  .title_toggle {
    font-size: 1.6rem;
  }
 #header {
  .container {
    .menu {
      nav {
    
        ul {
          li {
            a {
              &.logo {
                display: block;
                img {
                  /* background-image: url('../../assets/images/black/png.png'); */
                  background-size: contain;
                  min-width: 100px;
                  max-width: 100px;
                }
              }
            }
          }
        }
    
        .menu {
          left: 32rem;
          width: 0;
        }
        
      }
    }
  }
 } 
}
@media (max-width: 767px){
  #header {
    .title_toggle {
      font-size: 1.6rem;
    }
    .sobre-menu {
      margin-bottom: 0;
    }
  }
  nav.show ul.grid {
    gap: 5rem;
    margin-top: -20rem;
  }
  nav {
    ul {
      li {
        a {
          &::after {
            bottom: -0.4rem;
          }
        }
      }
    }
  }
}

/*================ NEW STYLE 2023 ============================= */
.dark_theme_container {
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: 1030px) {
      display: none !important;
    }
  >.kDJRIF {
    position: inherit;
  }
  >.kDJRIF .show {
    position: inherit;
    width: 100%;
  }
  >.rglBl {
    position: inherit;
    >.show {
      width: 100%;
    }
  }
}
`;