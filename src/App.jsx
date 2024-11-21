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
      </Routes>
    </Router>
  );
}

export default App;