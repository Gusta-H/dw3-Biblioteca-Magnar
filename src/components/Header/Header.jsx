import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className="nav-bar">
      <div className="logo"><h1>BIBLIOTECH</h1>
      </div>

      <div className="nav-list">
        <ul>
            <li className="nav-item"><Link to="/">Início</Link></li>
            <li className="nav-item"><Link to="/usuarios">Usuários</Link></li>
            <li className="nav-item"><Link to="/emprestimos">Empréstimos</Link></li>
            <li className="nav-item"><Link to="/livros">Livros</Link></li>
        </ul>
      </div>

      {/* <div className="foto">
        <button><img className="img" src="" alt="" /></button>
      </div> */}

      <div className="sair-button">
        <button><a href="#">Sair</a></button>
      </div>

      </nav>
    </header>
  );
}

export default Header;
