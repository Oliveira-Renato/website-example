import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/index';
import { About } from './pages/about/index';
import { ContactForm } from './pages/contacts/index';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import  NavBar  from './components/NavBar';
import { Whatsapp } from './components/Whatsapp';



function App() {
  return (
     <div className="App">
      <BrowserRouter>
      <Layout /> 
      <GlobalStyle />
      
        <NavBar />
        <Whatsapp />
        <Routes>  
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<About />}/>
          <Route path="/contato" element={<ContactForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
