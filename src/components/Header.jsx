import React from 'react';
import { Link } from 'react-router-dom';  // Usando Link para navegação
import '../style/EstiloHeader.css';  // Importando o CSS do header

function Header() {
  return (
    <header>
      <nav className="nav-bar">
      <div className="logo"><h1>BIBLIOTECH</h1>
      </div>

      <div className="nav-list">
        <ul>
            <li className="nav-item"><Link to="/">Início</Link></li>
            <li className="nav-item"><a href="#">Usuário</a></li>
            <li className="nav-item"><a href="#">Empréstimos</a></li>
            <li className="nav-item"><a href="#">Livros</a></li>
        </ul>
      </div>

      <div className="foto">
        <button><img className="img" src="" alt="" /></button>
      </div>

      <div className="sair-button">
        <button><a href="#">Sair</a></button>
      </div>

      </nav>
    </header>
  );
}

export default Header;
