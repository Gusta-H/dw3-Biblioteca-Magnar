import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emprestimosData from '../../assets/data/emprestimos.json';
import usuariosData from '../../assets/data/usuarios.json';
import livrosData from '../../assets/data/livros.json';
// import axios from 'axios';
import './Emprestimos.css';
import Header from '../../components/Header/Header';

function Emprestimos() {
  const [emprestimos, setEmprestimos] = useState([]);
  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Relaciona empréstimos com usuários e livros
    const emprestimosComDetalhes = emprestimosData.map((emprestimo) => {
      const usuario = usuariosData.find(
        (usuario) => usuario._id.$oid === emprestimo.usuario_id.$oid
      );
      const livro = livrosData.find(
        (livro) => livro._id.$oid === emprestimo.livro_id.$oid
      );

      return {
        id: emprestimo._id.$oid,
        tituloLivro: livro ? livro.titulo : 'Livro não encontrado',
        nomeUsuario: usuario ? usuario.nome : 'Usuário não encontrado',
        dataEmprestimo: new Date(emprestimo.data_emprestimo.$date),
        dataDevolucao: new Date(emprestimo.data_devolucao.$date),
        status: emprestimo.status,
      };
    });

    setEmprestimos(emprestimosComDetalhes);

    // Código comentado para integração com backend:
    /*
    const fetchEmprestimos = async () => {
      try {
        const response = await axios.get('/emprestimos');
        const dadosEmprestimos = response.data;

        // Após buscar os empréstimos, relaciona com usuários e livros
        const usuariosResponse = await axios.get('/usuarios');
        const livrosResponse = await axios.get('/livros');

        const usuarios = usuariosResponse.data;
        const livros = livrosResponse.data;

        const emprestimosComDetalhes = dadosEmprestimos.map((emprestimo) => {
          const usuario = usuarios.find((u) => u.id === emprestimo.usuario_id);
          const livro = livros.find((l) => l.id === emprestimo.livro_id);

          return {
            ...emprestimo,
            nomeUsuario: usuario ? usuario.nome : 'Usuário não encontrado',
            tituloLivro: livro ? livro.titulo : 'Livro não encontrado',
          };
        });

        setEmprestimos(emprestimosComDetalhes);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchEmprestimos();
    */
  }, []);

  const handleBuscar = (e) => {
    setBusca(e.target.value);
  };

  const emprestimosFiltrados = emprestimos.filter((emprestimo) =>
    emprestimo.tituloLivro.toLowerCase().includes(busca.toLowerCase())
  );

  const handleExcluir = (id) => {
    setEmprestimos(emprestimos.filter((emprestimo) => emprestimo.id !== id));

    // Código comentado para exclusão via backend:
    /*
    try {
      await axios.delete(`/emprestimos/${id}`);
    } catch (error) {
      console.error('Erro ao excluir o empréstimo:', error);
    }
    */
  };

  return (
    <div>
      <Header />

      <div className="busca-adicionar">
        <input
          type="text"
          placeholder="Buscar empréstimo pelo título do livro..."
          value={busca}
          onChange={handleBuscar}
        />
        <button onClick={() => navigate('/emprestimos/criar')}>
          Adicionar Empréstimo
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Livro</th>
            <th>Usuário</th>
            <th>Data Empréstimo</th>
            <th>Data Devolução</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {emprestimosFiltrados.map((emprestimo) => (
            <tr key={emprestimo.id}>
              <td>{emprestimo.tituloLivro}</td>
              <td>{emprestimo.nomeUsuario}</td>
              <td>{emprestimo.dataEmprestimo.toLocaleDateString()}</td>
              <td>{emprestimo.dataDevolucao.toLocaleDateString()}</td>
              <td>{emprestimo.status}</td>
              <td className="acoes">
                <button
                  onClick={() => navigate(`/emprestimos/editar/${emprestimo.id}`)}
                >
                  Editar
                </button>
                <button onClick={() => handleExcluir(emprestimo.id)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Emprestimos;
