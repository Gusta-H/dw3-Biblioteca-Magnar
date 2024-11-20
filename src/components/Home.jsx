import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';  
import '../style/EstiloHome.css';  

function Home() {
  return (
    <div className="home-container">
      <main>
        <div className="home-actions">
          <Link to="/cadastrar-doacao" className="action-link">Adcionar livro</Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
