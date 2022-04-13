import styled from 'styled-components';

export const ContainerContact = styled.div`
#form .button {
  border: none;
  padding: 0 3.2rem;
  height: 4.8rem;
  margin-left: 1rem;
  margin-top: 2.2rem;
}
.go2358747891 {
  background: ${props => props.theme.colors.baseColor} !important;
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
      border: 1px solid rgba(0, 0, 0, .08);
      border-radius: 0.25rem;
      color: ${props => props.theme.colors.textColor};
      background: ${props => props.theme.colors.bodyColorAlt};
      resize: none;
      box-shadow: 0px 1px 4px ${props => props.theme.colors.baseColorSecond};
      text-align: left;

      &::placeholder {
        opacity: 0.5; 
      }
  }

    textarea {
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
`;