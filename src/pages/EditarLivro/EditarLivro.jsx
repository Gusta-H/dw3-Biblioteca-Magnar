import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import livrosData from '../../assets/data/livros.json'; // Importando os dados do JSON
import './EditarLivro.css';
import Header from '../../components/Header/Header';

function EditarLivro() {
  const { id } = useParams(); // Obtém o ID do livro a ser editado da URL
  const navigate = useNavigate();

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

  // Carrega os dados do livro selecionado (integração com o backend comentada)
  useEffect(() => {
    // Exemplo de requisição GET para buscar os dados do livro pelo ID
    /*
    fetch(`/api/livros/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLivro({
          titulo: data.titulo,
          autor: data.autor,
          ano_publicacao: data.ano_publicacao,
          url_capa: data.url_capa,
          generos: data.generos.join(', '), // Converte o array de gêneros para string
          descricao: data.descricao,
          quantidade: data.quantidade,
        });
      })
      .catch((error) => {
        console.error('Erro ao carregar dados do livro:', error);
        setErro('Livro não encontrado!');
      });
    */

    // Simulação de carregamento de dados a partir de um JSON local
    const livroEncontrado = livrosData.find((livro) => livro._id.$oid === id);
    if (livroEncontrado) {
      setLivro({
        titulo: livroEncontrado.titulo,
        autor: livroEncontrado.autor,
        ano_publicacao: livroEncontrado.ano_publicacao,
        url_capa: livroEncontrado.url_capa,
        generos: livroEncontrado.generos.join(', '), // Converte o array de gêneros para string
        descricao: livroEncontrado.descricao,
        quantidade: livroEncontrado.quantidade,
      });
    } else {
      setErro('Livro não encontrado!');
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLivro((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Para fins de demonstração, o livro editado será atualizado diretamente no JSON local
    // Em uma integração real, seria necessário usar um método PUT para atualizar os dados do livro no backend
    /*
    fetch(`/api/livros/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        titulo: livro.titulo,
        autor: livro.autor,
        ano_publicacao: livro.ano_publicacao,
        url_capa: livro.url_capa,
        generos: livro.generos.split(',').map((genero) => genero.trim()), // Converte a string de gêneros para array
        descricao: livro.descricao,
        quantidade: livro.quantidade,
      }),
    })
      .then((response) => {
        if (response.ok) {
          navigate('/livros');
        } else {
          throw new Error('Falha ao atualizar livro');
        }
      })
      .catch((error) => {
        console.error('Erro ao atualizar livro:', error);
        setErro('Erro ao salvar as alterações');
      });
    */

    // Atualização simulada no JSON local
    const livroIndex = livrosData.findIndex((livro) => livro._id.$oid === id);
    if (livroIndex !== -1) {
      livrosData[livroIndex] = {
        ...livrosData[livroIndex],
        titulo: livro.titulo,
        autor: livro.autor,
        ano_publicacao: livro.ano_publicacao,
        url_capa: livro.url_capa,
        generos: livro.generos.split(',').map((genero) => genero.trim()), // Converte a string de gêneros para array
        descricao: livro.descricao,
        quantidade: livro.quantidade,
      };
      navigate('/livros');
    }
  };

  return (
    <div>
      <Header />
      <h1>Editar Livro</h1>

      {erro && <p className="erro">{erro}</p>}

      <form onSubmit={handleSubmit} className="form-cadastro">
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

        <button type="submit" className="btn-submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default EditarLivro;
