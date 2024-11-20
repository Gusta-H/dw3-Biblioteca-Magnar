import React from 'react';
import { Link } from 'react-router-dom';  // Usando Link para navegação
import '../style/EstiloHeader.css';  // Importando o CSS do header

function Header() {
  return (
    <header>
      <nav class="nav-bar">
      <div class="logo"><h1>BIBLIOTECH</h1>
      </div>

      <div class="nav-list">
        <ul>
            <li class="nav-item"><Link to="/">Início</Link></li>
            <li class="nav-item"><a href="#">Usuário</a></li>
            <li class="nav-item"><a href="#">Empréstimos</a></li>
            <li class="nav-item"><a href="#">Livros</a></li>
        </ul>
      </div>

      <div class="foto">
        <button><img class="img" src="" alt="" /></button>
      </div>

      <div class="sair-button">
        <button><a href="#">Sair</a></button>
      </div>

      </nav>
    </header>
  );
}

export default Header;
