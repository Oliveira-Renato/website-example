import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ContactForm } from './pages/contacts/index';

import { ProductTest }  from './components/Produtos/Product';
import { HeaderEffect } from './hooks/Header';
import  ScrollReavelling  from './hooks/ScrollReveal';
import { ProgressBar } from './components/Progressbar/progressbar';

import { Toaster } from 'react-hot-toast';
import { Home } from './pages/home/index';
import { Cookies } from './hooks/cookies/Cookie';
import { AboutPage } from './pages/about/index';
import { Recaptcha } from './hooks/recaptcha/Recaptcha';
import { ThemeProvider} from 'styled-components';
import MapChart from './components/location';

import GlobalStyle from './styles/global';
import './styles/media.scss';
import './styles/variables.css';
import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light'
import dark from './styles/themes/dark'; 
import {Toggler} from './components/darkmode';  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Regimento } from './pages/regimento';
import { Etica } from './pages/etica';
import { LGPDpage } from './pages/lgpd';
import { Legislacao } from './pages/legislacao';


export const globalTheme = {}

function App() {
  const [globalTheme, setGlobalTheme] = usePersistedState('themes', light); 
  const toggleTheme= () => {
    console.log('theme',globalTheme);
    setGlobalTheme(globalTheme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={globalTheme}>
     <div className="App">
        <span className='dark_mode_main_icon'>
          <Toggler toggleTheme={toggleTheme} /> 
        </span>
        {/* <ScrollReavelling /> */}
        <BrowserRouter> 
          <Toaster
          position="top-right"
          reverseOrder={false} 
          className="toaster"
          />
            <GlobalStyle />
              <Cookies />
                <HeaderEffect /> 
                    <ProgressBar />
                      <Routes> 
                        <Route path="/" element={<Home />} />
                        <Route path="/produtos" element={<ProductTest />} />
                        <Route path="/regimento-interno" element={<Regimento />} />
                        <Route path="/codigo-de-etica" element={<Etica />} />
                        <Route path="/lgpd" element={<LGPDpage />} />
                        <Route path="/legislacao" element={<Legislacao />} />
                        <Route path="/#about" element={<AboutPage />} />
                        <Route path="/#contact" element={<ContactForm />} />
                      </Routes>
              <Recaptcha />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;