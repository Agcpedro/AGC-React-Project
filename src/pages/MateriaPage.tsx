import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MateriasContext } from '../context/MateriaContext';

const MateriaPage: React.FC = () => {
  const { nome } = useParams<{ nome: string }>(); // Usando o nome como parâmetro
  const { materias } = useContext(MateriasContext);

  // Encontrar a matéria com base no nome
  const materia = materias.find(m => m.nome === nome);

  if (!materia) {
    return <div>Matéria não encontrada</div>;
  }

  return (
    <div className="px-8 py-8">
      {/* Cabeçalho */}
      <div className="flex justify-between items-start mb-8">
        {/* Nome da matéria e descrição em uma caixa invisível */}
        <div className="text-left max-w-[60%]"> {/* Adicionada largura máxima */}
          <h1 className="text-4xl font-bold mb-4">{materia.nome}</h1>
          <p className="text-gray-600">{materia.descricao}</p>
        </div>
  
        {/* Imagem no canto superior direito */}
        <div className="w-2/4">
          <img src={materia.imagem} alt={materia.nome} className="ml-5 rounded-lg shadow-md" />
        </div>
      </div>
  
      {/* Conteúdo e Atividades */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Conteúdo e Atividades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Exemplo de blocos de atividades */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">Atividade 1</div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">Atividade 2</div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">Atividade 3</div>
        </div>
      </div>
    </div>
  );
};

export default MateriaPage;


