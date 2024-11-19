import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importando o hook useNavigate
import '../style/DoeForm.css';  // Importando o CSS do formulário

function DoeLivrosForm() {
  const navigate = useNavigate();  // Hook para navegação

  // Função para navegar para a página inicial
  const handleBackClick = () => {
    navigate('/');  // Navega para a página home
  };

  return (
    <div className="form-container">
      <h1>Doe Livros</h1>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Email" />

        <label>Nome do livro:</label>
        <input type="text" placeholder="Nome Completo" />

        <label>Telefone:</label>
        <input type="tel" placeholder="Telefone" />

        <label>Ano do Livro:</label>
        <input type="number" placeholder="Ano do Livro" />

        <label>Descreva os itens a serem doados:</label>
        <textarea placeholder="Descrição" />

        <label>Foto dos itens:</label>
        <input type="file" />

        <div className="button-container">
          <button type="button" onClick={handleBackClick}>Voltar</button> {/* Botão de Voltar */}
          <button type="submit" className="submit-button">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default DoeLivrosForm;
