import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



import { ContactForm } from './pages/contacts/index';

import GlobalStyle from './styles/global';
import  {ProductTest}  from './components/Produtos/Product';
import { HeaderEffect } from './hooks/Header';
import  ScrollReavelling  from './hooks/ScrollReveal';
import { ProgressBar } from './components/Progressbar/progressbar';


import './styles/media.scss';
import { Toaster } from 'react-hot-toast';
import { Suport } from './pages/suport/index';


import { Home } from './pages/home/index';
import { Cookies } from './hooks/cookies/Cookie';
import { AboutPage } from './pages/about/index';
import { Testimonials } from './pages/testimonials/index';
import { Recaptcha } from './hooks/recaptcha/Recaptcha';



import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light'
import dark from './styles/themes/dark'; 
import SwitchDark from './components/darkmode';  



function App() {

  const [theme, setTheme] = usePersistedState('theme', dark); 

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
     <div className="App">
      <BrowserRouter> 

      <SwitchDark toggleTheme={toggleTheme} /> 
        <Toaster
        position="top-right"
        reverseOrder={false} 
        />
          <GlobalStyle />
            <Cookies />
              <HeaderEffect /> 
                {/* <ScrollReavelling /> */}
                  <ProgressBar />
  
                    <Routes>  
                      <Route path="/" element={<Home />} />
                      <Route path="/produtos" element={<ProductTest />} />
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
