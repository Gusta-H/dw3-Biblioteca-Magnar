import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import livrosData from '../../assets/data/livros.json'; // Importando os dados do JSON
import './Livro.css';
import Header from '../../components/Header/Header';

function Livro() {
  const { id } = useParams(); // Obtém o ID do livro a ser visualizado
  const [livro, setLivro] = useState(null);
  const [erro, setErro] = useState('');

  // Carrega os dados do livro selecionado
  useEffect(() => {
    // Exemplo de requisição GET para buscar os dados do livro pelo ID
    /*
    fetch(`/api/livros/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLivro(data);
      })
      .catch((error) => {
        console.error('Erro ao carregar dados do livro:', error);
        setErro('Livro não encontrado!');
      });
    */

    // Simulação de carregamento de dados a partir de um JSON local
    const livroEncontrado = livrosData.find((livro) => livro._id.$oid === id);
    if (livroEncontrado) {
      setLivro(livroEncontrado);
    } else {
      setErro('Livro não encontrado!');
    }
  }, [id]);

  if (erro) {
    return <div>{erro}</div>;
  }

  if (!livro) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Header />
      <div className="dashboard">
      <div className="livro-container">
        <h1>{livro.titulo}</h1>
        <div className="livro-info">
          <img src={livro.url_capa} alt={`Capa do livro ${livro.titulo}`} className="livro-capa" />
          <div className="livro-details">
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Ano de Publicação:</strong> {livro.ano_publicacao}</p>
            <p><strong>Descrição:</strong> {livro.descricao}</p>
            <p><strong>Gêneros:</strong> {livro.generos.join(', ')}</p>
            <p><strong>Quantidade disponível:</strong> {livro.quantidade}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Livro;
