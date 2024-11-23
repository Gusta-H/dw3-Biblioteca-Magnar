import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './EditarUsuario.css';
import Header from '../../components/Header/Header';
import usuariosData from '../../assets/data/usuarios.json'; 

function EditarUsuario() {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: {
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: ''
    }
  });
  const [emailExists, setEmailExists] = useState(false);
  const { id } = useParams(); // Pegando o ID do usuário pela URL
  const navigate = useNavigate();

  useEffect(() => {
    // Procurando o usuário no JSON importado
    const usuarioEncontrado = usuariosData.find(u => u._id.$oid === id);
    if (usuarioEncontrado) {
      setUsuario(usuarioEncontrado);
    } else {
      console.error('Usuário não encontrado');
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('endereco.')) {
      const [field, key] = name.split('.');
      setUsuario((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [key]: value,
        }
      }));
    } else {
      setUsuario((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const checkEmailExists = async (email) => {
    try {
      // Código comentado para requisição ao backend:
      /*
      const response = await axios.get(`/api/usuarios/getByEmail?email=${email}`);
      setEmailExists(response.data.exists);
      */
      
      // Simulando a verificação de email
      if (email === "joao.silva@email.com") {
        setEmailExists(true);
      } else {
        setEmailExists(false);
      }
    } catch (error) {
      console.error('Erro ao verificar email:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailExists) {
      alert('Este email já está em uso.');
      return;
    }

    try {
      // Código comentado para requisição ao backend:
      /*
      await axios.put(`/api/usuarios/${id}`, usuario);
      */
      
      alert('Usuário atualizado com sucesso!');
      navigate('/usuarios'); // Redireciona para a lista de usuários
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return (
    <div className="editar-usuario">
      <Header />
      <h1>Editar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={usuario.nome}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={usuario.email}
            onChange={(e) => {
              handleInputChange(e);
              checkEmailExists(e.target.value);
            }}
            required
          />
          {emailExists && <span className="erro">Este email já está em uso.</span>}
        </div>
        <div className="campo">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={usuario.telefone}
            onChange={handleInputChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            name="endereco.cep"
            value={usuario.endereco.cep}
            onChange={handleInputChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="rua">Rua:</label>
          <input
            type="text"
            id="rua"
            name="endereco.rua"
            value={usuario.endereco.rua}
            onChange={handleInputChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="numero">Número:</label>
          <input
            type="text"
            id="numero"
            name="endereco.numero"
            value={usuario.endereco.numero}
            onChange={handleInputChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            id="bairro"
            name="endereco.bairro"
            value={usuario.endereco.bairro}
            onChange={handleInputChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            name="endereco.cidade"
            value={usuario.endereco.cidade}
            onChange={handleInputChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            id="estado"
            name="endereco.estado"
            value={usuario.endereco.estado}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Atualizar Usuário</button>
      </form>
    </div>
  );
}

export default EditarUsuario;
