import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.baseColor};
  background-color: rgba(0, 0, 0, 0);
  right: 2.4rem;
  position: fixed;
  z-index: 9999;
  visibility: visible; 

  
   
  .buttonTheme{
    color: ${props => props.theme.colors.baseColor};
    cursor: pointer;
    width: 50px;
    height: 25px;
  }

  .darkIcon {
    position: absolute;
    right: 37rem;
    top: -11.5rem;

    @media(max-width: 1030px) {
      right: auto;
      top: -25rem;
    }

    @media(min-width: 1030px) {
      right: 25rem;
    }
    @media(min-width: 1240px) {
      right: 37rem;
    } 
  }

  .darkIcontoggle {
    
    @media(max-width: 1030px) {
      transition: 0.3s ;
      position: fixed; /* or absolute */
      top: -5rem;
      left: 50%;
    }
  }
`;  