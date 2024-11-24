import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Livros from './pages/Livros/Livros';
import Livro from './pages/Livro/Livro';
import CadastrarLivro from './pages/CadastrarLivro/CadastrarLivro';
import EditarLivro from './pages/EditarLivro/EditarLivro';
import Emprestimos from './pages/Emprestimos/Emprestimos';
import CadastrarEmprestimo from './pages/CadastrarEmprestimo/CadastrarEmprestimo';
import Usuarios from './pages/Usuarios/Usuarios';
import CadastrarUsuario from './pages/CadastrarUsuario/CadastrarUsuario';
import EditarUsuario from './pages/EditarUsuario/EditarUsuario';
import EditarEmprestimo from './pages/EditarEmprestimo/EditarEmprestimo';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/livros/:id" element={<Livro />} />
        <Route path="/livros/adicionar" element={<CadastrarLivro />} />
        <Route path="/livros/editar/:id" element={<EditarLivro />} />
        <Route path="/emprestimos" element={<Emprestimos />} />
        <Route path="/emprestimos/criar" element={<CadastrarEmprestimo />} />
        <Route path="/emprestimos/editar/:id" element={<EditarEmprestimo />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/criar" element={<CadastrarUsuario />} />
        <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;