import React from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Usuario: React.FC = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Página de Usuários
      </h1>
      {user ? (
        <div>
          <p className="text-lg text-gray-600 mb-4">
            Bem-vindo, {user.nome}!
          </p>
          {user.foto && (
            <img 
              src={user.foto} 
              alt={user.nome} 
              className="w-32 h-32 object-cover rounded-full mb-4" 
            />
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="text-lg text-gray-600 mb-4">
            Você não está logado.
          </p>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Usuario;