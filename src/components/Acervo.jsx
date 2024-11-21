import React from 'react';
import Header from '../components/Header';
import '../style/EstiloAcervo.css';
import codigoLimpo from '../assets/img/codigo-limpo.jpg';

function Acervo() {
  return (
    <div className="acervo-page">
      {/* Header */}
      <Header />

      {/* Conteúdo principal */}
      <div className="acervo-content">
        <h1>Acervo</h1>

        {/* Barra de busca e botão de adicionar */}
        <div className="acervo-actions">
          <input 
            type="text" 
            placeholder="Pesquise pelo título" 
            className="search-bar" 
          />
          <button className="add-book-button">+ Adicionar Livro</button>
        </div>

        {/* Tabela de livros */}
        <div className="acervo-table">
          <div className="table-header">
            <span className="table-column">Título</span>
            <span className="table-column">Autor</span>
            <span className="table-column">Gênero(s)</span>
            <span className="table-column">Empréstimo</span>
          </div>

          <div className="table-row">
          <td>
          <img src={codigoLimpo} alt="Código Limpo" className="book-cover" />
          </td>
            <span className="table-column">Código Limpo: Habilidades Práticas do Agile Software</span>
            <span className="table-column">Robert C. Martin</span>
            <span className="table-column">Programação, Tecnologia, Back-end</span>
            <span className="table-column">10/11/2024</span>
            <div className="table-actions">
              <button className="edit-button">Editar</button>
              <button className="delete-button">Excluir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acervo;
