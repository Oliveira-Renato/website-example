import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ContactForm } from './pages/contacts/index';

import { ProductTest }  from './components/Produtos/Product';
import { HeaderEffect } from './hooks/Header';
import  ScrollReavelling  from './hooks/ScrollReveal';
import { ProgressBar } from './components/Progressbar/progressbar';

import { Toaster } from 'react-hot-toast';
import { Suport } from './pages/suport/index';

import { Home } from './pages/home/index';
import { Cookies } from './hooks/cookies/Cookie';
import { AboutPage } from './pages/about/index';
import { Testimonials } from './pages/testimonials/index';
import { Recaptcha } from './hooks/recaptcha/Recaptcha';
import { ThemeProvider} from 'styled-components';
import MapChart from './components/location';

import GlobalStyle from './styles/global';
import './styles/media.scss';
import './styles/variables.css';
import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light'
import dark from './styles/themes/dark'; 
import SwitchDark from './components/darkmode';  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  const [theme, setTheme] = usePersistedState('themes', light); 

   const toggleTheme= () => {
     setTheme(theme.title === 'light' ? dark : light);
    };

  return (
    <ThemeProvider theme={theme}>
      
     <div className="App">
     <SwitchDark toggleTheme={toggleTheme} /> 
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
                      <Route path="/localizacao" element={<MapChart />} />
                      <Route path="/suporte" element={<Suport />} />
                      <Route path="/#about" element={<AboutPage />} />
                      <Route path="/#contact" element={<ContactForm />} />
                      <Route path="/#testimonials" element={<Testimonials />} />
                    </Routes>

            <Recaptcha />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;