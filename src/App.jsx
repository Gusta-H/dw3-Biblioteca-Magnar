import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Importando o Header
import Home from './components/Home';      // Página Home
import DoeLivrosForm from './components/DoeLivrosForm';  // Formulário de doação
import Acervo from './components/Acervo';


function App() {
  return (
    <Router>
      <Header />  {/* O Header será exibido em todas as páginas */}
      <Routes>
        <Route path="/acervo" element={<Acervo />} /> {/* Rota para a tela de acervo */}
        <Route path="/" element={<Home />} />  {/* Página inicial com Header */}
        <Route path="/cadastrar-doacao" element={<DoeLivrosForm />} />  {/* Formulário de doação */}
      </Routes>
    </Router>
  );
}

export default App;
