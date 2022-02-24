import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Home } from './pages/home/index';
import { About } from './pages/about/index';
import { ContactForm } from './pages/contacts/index';
import { Product } from './pages/products/Product';


import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import  Teste  from './components/teste';
import { Whatsapp } from './components/Whatsapp';
import { ProgressBar } from './components/progressbar';
import NavChangeColor from './components/ScrollTop';
import { ToggleMenu } from './components/ToggleMenu/Toggle';
import { ProcuctTest } from './components/Produtos/Product';



function App() {
  return (
     <div className="App">
      <BrowserRouter>
      <Layout /> 
      <GlobalStyle />
       {/* <ProgressBar /> */}
        <ToggleMenu />
        <Teste />
        <NavChangeColor />
        {/* <Whatsapp /> */}
        <Routes>  
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<About />}/>
          <Route path="/contato" element={<ContactForm />}/>
          <Route path="/produtos" element={<ProcuctTest />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
