import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.baseColor};
  background-color: rgba(0, 0, 0, 0);
  right: 2.4rem;
  position: fixed;
  z-index: 9999;


  @media(max-width: 1030px) {
      display: none; 
    }
  
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

    @media(min-width: 1030px) {
      right: 25rem;
    }
    @media(min-width: 1240px) {
      right: 37rem;
    }
  }
`;  