import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bem-vindo à Home Page!
      </h1>
      <p className="text-lg text-gray-600">
        Esta é a página principal da aplicação. Aqui você pode navegar para diferentes seções e explorar os recursos disponíveis.
      </p>
    </div>
  );
};

export default Home;
