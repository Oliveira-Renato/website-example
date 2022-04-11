import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';



import { Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


const Toggler= ({ toggleTheme }) => {

  function handleSetTheme(event) {
    event.preventDefault();
    toggleTheme();
  }

  return (
    <Container>
      <FontAwesomeIcon className="buttonTheme" icon={ faMoon } onClick={handleSetTheme}  />
    </Container>
  );
};

export default Toggler;