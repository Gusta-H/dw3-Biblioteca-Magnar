import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usuariosData from '../../assets/data/usuarios.json';
import livrosData from '../../assets/data/livros.json';
// import axios from 'axios';
import './CadastrarEmprestimo.css';
import Header from '../../components/Header/Header';

function CadastrarEmprestimo() {
  const navigate = useNavigate();

  const [emprestimo, setEmprestimo] = useState({
    usuario_id: '',
    livro_id: '',
    data_emprestimo: '',
    data_devolucao: '',
    status: 'em andamento', // Status padrão
  });

  const [usuarios, setUsuarios] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    // Carregar dados de usuários e livros
    setUsuarios(usuariosData);
    setLivros(livrosData);

    // Código comentado para integração com backend:
    /*
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('/usuarios');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    const fetchLivros = async () => {
      try {
        const response = await axios.get('/livros');
        setLivros(response.data);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };

    fetchUsuarios();
    fetchLivros();
    */
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmprestimo({ ...emprestimo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Empréstimo cadastrado:', emprestimo);

    // Substituir por lógica de cadastro no backend
    /*
    try {
      await axios.post('/emprestimos', emprestimo);
      navigate('/emprestimos');
    } catch (error) {
      console.error('Erro ao cadastrar empréstimo:', error);
    }
    */

    navigate('/emprestimos');
  };

  return (
    <div>
      <Header />
      <div className="cadastrar-emprestimo-container">
        <h2>Cadastrar Empréstimo</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="usuario_id">Usuário:</label>
            <select
              id="usuario_id"
              name="usuario_id"
              value={emprestimo.usuario_id}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um usuário</option>
              {usuarios.map((usuario) => (
                <option key={usuario._id.$oid} value={usuario._id.$oid}>
                  {usuario.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="livro_id">Livro:</label>
            <select
              id="livro_id"
              name="livro_id"
              value={emprestimo.livro_id}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um livro</option>
              {livros.map((livro) => (
                <option key={livro._id.$oid} value={livro._id.$oid}>
                  {livro.titulo}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="data_emprestimo">Data de Empréstimo:</label>
            <input
              type="date"
              id="data_emprestimo"
              name="data_emprestimo"
              value={emprestimo.data_emprestimo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="data_devolucao">Data de Devolução:</label>
            <input
              type="date"
              id="data_devolucao"
              name="data_devolucao"
              value={emprestimo.data_devolucao}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Cadastrar</button>
          <button type="button" onClick={() => navigate('/emprestimos')}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CadastrarEmprestimo;
