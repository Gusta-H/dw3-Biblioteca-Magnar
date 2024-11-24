import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import emprestimosData from '../../assets/data/emprestimos.json';
import usuariosData from '../../assets/data/usuarios.json';
import livrosData from '../../assets/data/livros.json';
// import axios from 'axios';
import './EditarEmprestimo.css';
import Header from '../../components/Header/Header';

function EditarEmprestimo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [emprestimo, setEmprestimo] = useState({
    usuario_id: '',
    livro_id: '',
    data_emprestimo: '',
    data_devolucao: '',
    status: '',
  });

  const [usuarios, setUsuarios] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    // Carregar dados de usuários e livros
    setUsuarios(usuariosData);
    setLivros(livrosData);

    // Localizar o empréstimo a ser editado
    const emprestimoEncontrado = emprestimosData.find(
      (e) => e._id.$oid === id
    );

    if (emprestimoEncontrado) {
      setEmprestimo({
        usuario_id: emprestimoEncontrado.usuario_id.$oid,
        livro_id: emprestimoEncontrado.livro_id.$oid,
        data_emprestimo: new Date(
          emprestimoEncontrado.data_emprestimo.$date
        ).toISOString().slice(0, 10),
        data_devolucao: new Date(
          emprestimoEncontrado.data_devolucao.$date
        ).toISOString().slice(0, 10),
        status: emprestimoEncontrado.status,
      });
    }

    // Código comentado para integração com backend:
    /*
    const fetchEmprestimo = async () => {
      try {
        const response = await axios.get(`/emprestimos/${id}`);
        setEmprestimo(response.data);
      } catch (error) {
        console.error('Erro ao buscar empréstimo:', error);
      }
    };

    const fetchUsuarios = async () => {
      const response = await axios.get('/usuarios');
      setUsuarios(response.data);
    };

    const fetchLivros = async () => {
      const response = await axios.get('/livros');
      setLivros(response.data);
    };

    fetchEmprestimo();
    fetchUsuarios();
    fetchLivros();
    */
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmprestimo({ ...emprestimo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Empréstimo atualizado:', emprestimo);

    // Substituir por lógica de atualização no backend
    /*
    try {
      await axios.put(`/emprestimos/${id}`, emprestimo);
      navigate('/emprestimos');
    } catch (error) {
      console.error('Erro ao atualizar empréstimo:', error);
    }
    */

    navigate('/emprestimos');
  };

  return (
    <div>
      <Header />
      <div className="editar-emprestimo-container">
        <h2>Editar Empréstimo</h2>
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

          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={emprestimo.status}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o status</option>
              <option value="em andamento">Em andamento</option>
              <option value="devolvido">Devolvido</option>
            </select>
          </div>

          <button type="submit">Salvar</button>
          <button type="button" onClick={() => navigate('/emprestimos')}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditarEmprestimo;
