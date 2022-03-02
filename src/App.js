import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Home } from './pages/home/index';
import { ContactForm } from './pages/contacts/index';
import { Product } from './pages/products/Product';


import GlobalStyle from './styles/global';
import  {ProductTest}  from './components/Produtos/Product';
import { HeaderEffect } from './hooks/Header';
import { ProgressBar } from './components/ProgressBar/progressbar';






function App() {
  return (
     <div className="App">
      <BrowserRouter>
        <GlobalStyle />
          <HeaderEffect />
          <ProgressBar />
 
            <Routes>  
              <Route path="/" element={<Home />}/>
              <Route path="/contato" element={<ContactForm />}/>
              <Route path="/produtos" element={<ProductTest />}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
