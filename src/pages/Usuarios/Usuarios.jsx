import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usuariosData from '../../assets/data/usuarios.json';
// import axios from 'axios';
import './Usuarios.css';
import Header from '../../components/Header/Header';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Substitui o fetch por dados estáticos do JSON
    setUsuarios(
      usuariosData.map((usuario) => ({
        id: usuario._id.$oid, // Corrige o acesso ao identificador
        ...usuario,
      }))
    );

    // Código comentado para requisição ao backend:
    /*
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('/usuarios');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsuarios();
    */
  }, []);

  const handleBuscar = (e) => {
    setBusca(e.target.value);
  };

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const handleExcluir = (id) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));

    // Código comentado para exclusão via backend:
    /*
    try {
      await axios.delete(`/usuarios/${id}`);
    } catch (error) {
      console.error('Erro ao excluir o usuário:', error);
    }
    */
  };

  return (
    <div>
      <Header />

      <div className="busca-adicionar">
        <input
          type="text"
          placeholder="Buscar usuário pelo nome..."
          value={busca}
          onChange={handleBuscar}
        />
        <button onClick={() => navigate('/usuarios/adicionar')}>Adicionar Usuário</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>{usuario.telefone}</td>
              <td>
                {`${usuario.endereco.rua}, ${usuario.endereco.numero}, ${usuario.endereco.bairro}, 
                ${usuario.endereco.cidade} - ${usuario.endereco.estado}, ${usuario.endereco.cep}`}
              </td>
              <td className="acoes">
                <button onClick={() => navigate(`/usuarios/editar/${usuario.id}`)}>Editar</button>
                <button onClick={() => handleExcluir(usuario.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;
