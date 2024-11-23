import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CadastrarUsuario.css';
import Header from '../../components/Header/Header';

function CadastrarUsuario() {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });

    // Quando o CEP é preenchido, faz a consulta à API ViaCEP
    if (name === 'cep' && value.length === 8) {
      buscarEndereco(value);
    }
  };

  const buscarEndereco = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        setErro('CEP não encontrado.');
        return;
      }

      setUsuario((prev) => ({
        ...prev,
        rua: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        estado: response.data.uf,
      }));
      setErro(''); // Limpa o erro se a busca for bem-sucedida
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      setErro('Erro ao buscar o CEP. Tente novamente.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    // Verifica se o email já existe no backend
    /*
    try {
      const response = await axios.get(`/api/usuarios/getByEmail?email=${usuario.email}`);
      if (response.data) {
        setErro('Já existe um usuário com este email.');
        return;
      }
    } catch (error) {
      console.error('Erro ao verificar o email:', error);
    }
    */

    // Submissão dos dados ao backend
    /*
    try {
      await axios.post('/api/usuarios', usuario);
      navigate('/usuarios'); // Redireciona para a lista de usuários após o cadastro
    } catch (error) {
      console.error('Erro ao cadastrar o usuário:', error);
      setErro('Erro ao cadastrar o usuário. Tente novamente.');
    }
    */
    alert('Usuário cadastrado com sucesso! (simulado)');
    navigate('/usuarios');
  };

  return (
    <div>
      <Header />
      <div className="form-container">
        <h2>Cadastrar Novo Usuário</h2>
        {erro && <p className="erro">{erro}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={usuario.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={usuario.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Telefone:</label>
            <input
              type="text"
              name="telefone"
              value={usuario.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>CEP:</label>
            <input
              type="text"
              name="cep"
              value={usuario.cep}
              onChange={handleChange}
              maxLength="8"
              required
            />
          </div>

          <div className="form-group">
            <label>Rua:</label>
            <input
              type="text"
              name="rua"
              value={usuario.rua}
              onChange={handleChange}
              required
              readOnly
            />
          </div>

          <div className="form-group">
            <label>Número:</label>
            <input
              type="text"
              name="numero"
              value={usuario.numero}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Bairro:</label>
            <input
              type="text"
              name="bairro"
              value={usuario.bairro}
              onChange={handleChange}
              required
              readOnly
            />
          </div>

          <div className="form-group">
            <label>Cidade:</label>
            <input
              type="text"
              name="cidade"
              value={usuario.cidade}
              onChange={handleChange}
              required
              readOnly
            />
          </div>

          <div className="form-group">
            <label>Estado:</label>
            <input
              type="text"
              name="estado"
              value={usuario.estado}
              onChange={handleChange}
              required
              readOnly
            />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastrarUsuario;
