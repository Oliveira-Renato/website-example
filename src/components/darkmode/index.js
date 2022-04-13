import React, { useContext } from 'react';

import {ContainerHeader} from '../header/styles';
import { Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


const Toggler= ({ toggleTheme }) => {

  

  function handleSetTheme(event) {
    event.preventDefault();
    toggleTheme();
  }

  return (
    <ContainerHeader>
      <Container>
        <div className="show">
        <div className="ainda_nao darkIcon">
          <FontAwesomeIcon className="buttonTheme" icon={ faMoon } onClick={handleSetTheme}  />
        </div>
      </div>
        
      </Container>
    </ContainerHeader>
      
  );
};

export default Toggler;