import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.baseColor};
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  right: 11.2rem;
  top: 2.4rem;
  z-index: 9999;
  visibility: visible; 
  /* @media(max-width: 1030px) {
    position: relative;
    top: 1.5em;
  } */
  .buttonTheme{
    color: ${props => props.theme.colors.baseColor};
    cursor: pointer;
    width: 50px;
    height: 25px;

    @media(min-width: 2400px){
      height: 34px;
    }
  }
  .darkIcon {
    //position: absolute;
    right: 27rem;
    top: -11.5rem;
    @media(max-width: 1032px) {
      right: auto;
      top: -25rem;
    }
    @media(min-width: 1240px) {
      right: 37rem;
    } 
  }
  .darkIcontoggle {
    
    @media(max-width: 1032px) {
      transition: 0.3s ;
      //position: fixed; /* or absolute */
      top: -5rem;
      left: 50%;
    }
  }
`;  