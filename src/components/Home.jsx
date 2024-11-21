import React from 'react';
import { useNavigate } from 'react-router-dom';  
import '../style/EstiloHome.css';
import codigoLimpo from '../assets/img/codigo-limpo.jpg';

function Home() {
  const navigate = useNavigate(); // Hook para navegação programática

  return (
    <div className="dashboard">
      {/* Últimos empréstimos */}
      <div className="recent-loans">
        <h2>Últimos empréstimos</h2>
        <div className="loan-item">
          <img src={codigoLimpo} alt="Código Limpo" className="book-cover" />
          <div className="loan-details">
            <p><strong>Código Limpo: Habilidades Práticas do Agile Software</strong></p>
            <p>Robert C. Martin</p>
            <p>Gênero(s): Programação, Tecnologia, Back-end</p>
            <p>Emprestado para: <strong>Juan da Silva Verde</strong></p>
            <p>Empréstimo em: 10/11/2024 18:41</p>
          </div>
        </div>
        {/* Replique .loan-item para adicionar mais itens */}
      </div>

      {/* Ações: Livros e Usuários */}
      <div className="actions">
        <div className="actions-group">
          <h3>Livros</h3>
          <div className="action-button">Mais emprestados</div>
          
          {/* Botão para "Adicionar livro" */}
          <div 
            className="action-button" 
            onClick={() => navigate('/cadastrar-doacao')} // Navega para a rota de cadastrar doação
            style={{ cursor: 'pointer' }} // Adiciona o cursor de ponteiro
          >
            Adicionar livro
          </div>

          {/* Botão para "Acervo Completo" */}
          <div 
            className="action-button" 
            onClick={() => navigate('/acervo')} // Navega para a rota de acervo
            style={{ cursor: 'pointer' }} // Adiciona o cursor de ponteiro
          >
            Acervo Completo
          </div>
        </div>
        <div className="actions-group">
          <h3>Usuários</h3>
          <div className="action-button">Adicionar usuário</div>
          <div className="action-button">Todos usuários</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
