import React, { useState, useRef } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [foto, setFoto] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Simular login
      // Na prática, você verificaria as credenciais com o backend
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.nome === nome && parsedUser.senha === senha) {
          login(parsedUser);
          navigate('/usuario');
        } else {
          alert('Credenciais inválidas');
        }
      } else {
        alert('Usuário não encontrado');
      }
    } else {
      // Criar nova conta
      const newUser = { id: Date.now().toString(), nome, senha, foto };
      login(newUser);
      navigate('/usuario');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFoto(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {isLogin ? 'Login' : 'Criar Conta'}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        {!isLogin && (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-gray-200 text-gray-800 p-2 rounded hover:bg-gray-300"
            >
              Selecionar Imagem de Perfil
            </button>
            {foto && (
              <img src={foto} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
            )}
          </div>
        )}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          {isLogin ? 'Entrar' : 'Criar Conta'}
        </button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 text-blue-500 hover:underline"
      >
        {isLogin ? 'Criar uma nova conta' : 'Já tenho uma conta'}
      </button>
    </div>
  );
};

export default Login;