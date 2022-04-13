import styled from 'styled-components';

<<<<<<< HEAD

export const ContainerCooks = styled.div`
@import "../../styles/variables.css";

.CookieConsent {
  
  button:hover { 
        background: #FFF !important; 
        transition: all 0.5s ease;
        color: var(--text-color) !important;
      }
}

`;
=======
export const Container = styled.div`
  .CookieConsent {
    background: ${props => props.theme.colors.bodyColor} !important;

  button {
    
       &:hover{
        background: ${props => props.theme.colors.bodyColor} !important; 
        transition: all 0.5s ease;
        color: ${props => props.theme.colors.textColor} !important;
      } 
    }
    #rcc-confirm-button {
      background: ${props => props.theme.colors.baseColor} !important;
      border: 0px; 
      border-radius: 2% !important; 
      box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px; 
      color: ${props => props.theme.colors.bodyColor} !important;
      cursor: pointer; 
      flex: 0 0 auto; 
      padding: 1rem 3.2rem; 
      margin: 15px; 
      font-size: 1.6rem;
      &:hover{
        background: ${props => props.theme.colors.bodyColor} !important; 
        transition: all 0.5s ease;
        color: ${props => props.theme.colors.textColor} !important;
      } 
    }

    #rcc-decline-button{
      background: ${props => props.theme.colors.bodyColor} !important;
      border: 0px; 
      border-radius: 2% !important; 
      box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px; 
      color: ${props => props.theme.colors.textColor} !important;
      cursor: pointer; 
      flex: 0 0 auto; 
      padding: 1rem 3.2rem; 
      margin: 15px; 
      font-size: 1.6rem;
      &:hover{
        background: ${props => props.theme.colors.baseColor} !important; 
        transition: all 0.5s ease;
        color: ${props => props.theme.colors.textColorLight} !important;
      } 
    }

    .policy_link {
      color: ${props => props.theme.colors.baseColor} !important;
    }
    .icones {
      color: ${props => props.theme.colors.baseColor} !important;
    }
}
`;



>>>>>>> darktheme
