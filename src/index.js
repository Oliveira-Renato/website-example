import React from 'react';
import ReactDOM from 'react-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import App from './App';

import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <React.StrictMode>
      <CookiesProvider>
        <App /> 
      </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

