import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import livrosData from '../../assets/data/livros.json'; // Importando os dados do JSON
import './CadastrarLivro.css';
import Header from '../../components/Header/Header';

function CadastrarLivro() {
  const [livro, setLivro] = useState({
    titulo: '',
    autor: '',
    ano_publicacao: '',
    url_capa: '',
    generos: '',
    descricao: '',
    quantidade: '',
  });
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLivro((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui a checagem de duplicação do título foi removida

    // Para fins de demonstração, adicionar ao JSON local
    livrosData.push(livro);
    navigate('/livros');
  };

  return (
    <div>
      <Header />
      <h1>Cadastrar Novo Livro</h1>

      <form onSubmit={handleSubmit} className="form-cadastro">
        {erro && <p className="erro">{erro}</p>}
        
        <div className="input-container">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={livro.titulo}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="autor">Autor</label>
          <input
            type="text"
            id="autor"
            name="autor"
            value={livro.autor}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="ano_publicacao">Ano de Publicação</label>
          <input
            type="number"
            id="ano_publicacao"
            name="ano_publicacao"
            value={livro.ano_publicacao}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="url_capa">URL da Capa</label>
          <input
            type="url"
            id="url_capa"
            name="url_capa"
            value={livro.url_capa}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            value={livro.descricao}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="generos">Gêneros</label>
          <input
            type="text"
            id="generos"
            name="generos"
            value={livro.generos}
            onChange={handleInputChange}
            placeholder="Digite os gêneros separados por vírgula"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            value={livro.quantidade}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarLivro;
