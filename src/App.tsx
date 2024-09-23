import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Usuario from './pages/Usuario';
import Layout from './components/Layout'; 
import Lista from './pages/Lista';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Define a Home como a rota padrão */}
        <Route path="/usuario" element={<Usuario />} />  {/* Rota para a página de usuários */}
        <Route path="/lista" element={<Lista />} />
      </Routes>
      </Layout>
    </Router>
  );
};

export default App;
