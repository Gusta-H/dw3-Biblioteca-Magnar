import React from 'react';
import { useNavigate } from 'react-router-dom';  // Hook para navegação
import '../style/DoeForm.css';  // Importa o CSS do formulário

function DoeLivrosForm() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');  // Volta para a página inicial
  };

  return (
    <div className="form-container">
      <h1>Adicionar Livros</h1>
      <form>
        <label>Titulo:</label>
        <input type="text" placeholder="Titulo" />

        <label>Autor</label>
        <input type="text" placeholder="Autor" />

        <label>Ano do Livro</label>
        <input type="text" placeholder="Ano do Livro" />

        <label>Gênero(s)</label>
        <input type="text" placeholder="Genero(s)" />

        <label>Quantidade</label>
        <input type="number" placeholder="Quantidade" />

        <label>Descrição</label>
        <textarea placeholder="Descrição"></textarea>

        <label>Capa do livro:</label>
        <input type="file" />

        <div className="button-container">
          <button type="button" onClick={handleBackClick}>Voltar</button>
          <button type="submit" className="submit-button">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default DoeLivrosForm;
