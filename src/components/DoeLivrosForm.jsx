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
      <h1>Doe Livros</h1>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Email" />

        <label>Nome do livro:</label>
        <input type="text" placeholder="Nome do Livro" />

        <label>Telefone:</label>
        <input type="tel" placeholder="Telefone" />

        <label>Ano do Livro:</label>
        <input type="number" placeholder="Ano do Livro" />

        <label>Descreva os itens a serem doados:</label>
        <textarea placeholder="Descrição"></textarea>

        <label>Foto dos itens:</label>
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
