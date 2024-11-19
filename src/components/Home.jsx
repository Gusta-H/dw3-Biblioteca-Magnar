import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';  
import '../style/EstiloHome.css';  

function Home() {
  return (
    <div className="home-container">
      <Header /> {}
      <main>
        <h1>Bem-vindo à Biblioteca Magnar</h1>
        <div className="home-actions">
          <Link to="/cadastrar-doacao" className="action-link">Clique aqui para cadastrar doação</Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
