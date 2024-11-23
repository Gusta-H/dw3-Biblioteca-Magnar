import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import livrosData from '../../assets/data/livros.json';
// import axios from 'axios';
import './Livros.css';
import Header from '../../components/Header/Header';

function Livros() {
  const [livros, setLivros] = useState([]);
  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Substitui o fetch por dados estáticos do JSON
    setLivros(
      livrosData.map((livro) => ({
        id: livro._id.$oid, // Corrige o acesso ao identificador
        ...livro,
      }))
    );

    // Código comentado para requisição ao backend:
    /*
    const fetchLivros = async () => {
      try {
        const response = await axios.get('/livros');
        setLivros(response.data);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };

    fetchLivros();
    */
  }, []);

  const handleBuscar = (e) => {
    setBusca(e.target.value);
  };

  const livrosFiltrados = livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  const handleExcluir = (id) => {
    setLivros(livros.filter((livro) => livro.id !== id));

    // Código comentado para exclusão via backend:
    /*
    try {
      await axios.delete(`/livros/${id}`);
    } catch (error) {
      console.error('Erro ao excluir o livro:', error);
    }
    */
  };

  return (
    <div>
        <Header />

        <div className="busca-adicionar">
            <input
            type="text"
            placeholder="Buscar livro pelo título..."
            value={busca}
            onChange={handleBuscar}
            />
            <button onClick={() => navigate('/livros/adicionar')}>Adicionar Livro</button>
        </div>

        <table>
            <thead>
            <tr>
                <th>Capa</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Ano</th>
                <th>Categorias</th>
                <th>Quantidade</th> {/* Coluna adicionada */}
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            {livrosFiltrados.map((livro) => (
                <tr key={livro.id}>
                <td>
                    <img src={livro.url_capa} alt={livro.titulo} />
                </td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>{livro.ano_publicacao}</td>
                <td>{livro.generos.join(', ')}</td>
                <td>{livro.quantidade}</td>
                <td className="acoes">
                    <button onClick={() => navigate(`/livros/editar/${livro.id}`)}>Editar</button>
                    <button onClick={() => handleExcluir(livro.id)}>Excluir</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
  );
}

export default Livros;
