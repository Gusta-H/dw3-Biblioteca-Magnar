import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';      // Página Home

import Livros from './pages/Livros';
import Livro from './pages/Livro';
import CadastrarLivro from './pages/CadastrarLivro';
import EditarLivro from './pages/EditarLivro';
import Emprestimos from './pages/Emprestimos';
import CadastrarEmprestimo from './pages/CadastrarEmprestimo';
import Usuarios from './pages/Usuarios';
import Usuario from './pages/Usuario';
import CadastrarUsuario from './pages/CadastrarUsuario';
=======
import DoeLivrosForm from './components/DoeLivrosForm';  // Formulário de doação
import Acervo from './components/Acervo';



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/livros/id" element={<Livro />} />
        <Route path="/livros/adicionar" element={<CadastrarLivro />} />
        <Route path="/livros/editar/id" element={<EditarLivro />} />
        <Route path="/emprestimos" element={<Emprestimos />} />
        <Route path="/emprestimos/criar" element={<CadastrarEmprestimo />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/id" element={<Usuario />} />
        <Route path="/usuarios/criar" element={<CadastrarUsuario />} />
=======
        <Route path="/acervo" element={<Acervo />} /> {/* Rota para a tela de acervo */}
        <Route path="/" element={<Home />} />  {/* Página inicial com Header */}
        <Route path="/cadastrar-doacao" element={<DoeLivrosForm />} />  {/* Formulário de doação */}

      </Routes>
    </Router>
  );
}

export default App;