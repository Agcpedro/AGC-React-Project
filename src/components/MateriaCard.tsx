import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MateriaCardProps {
  materia: { nome: string; descricao: string; imagem: string };
  onRemove: () => void;
}

const MateriaCard: React.FC<MateriaCardProps> = ({ materia, onRemove }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between cursor-pointer"
      onClick={() => navigate(`/materia/${materia.nome}`)} // Navegar para a página da matéria
    >
      <img src={materia.imagem} alt={materia.nome} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-4">{materia.nome}</h2>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Evita que clique no botão navegue para a página
          onRemove();
        }}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 mt-auto"
      >
        Remover
      </button>
    </div>
  );
};

export default MateriaCard;
