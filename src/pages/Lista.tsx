import React, { useContext, useState } from 'react';
import { MateriasContext } from '../context/MateriaContext';
import MateriaCard from '../components/MateriaCard';
import MateriaFormOverlay from '../components/MateriaFormOverlay';

const Lista: React.FC = () => {
  const { materias, setMaterias } = useContext(MateriasContext);
  const [showOverlay, setShowOverlay] = useState(false);

  const adicionarMateria = (materia: { nome: string; descricao: string; imagem: string }) => {
    setMaterias([...materias, materia]);
  };

  const removerMateria = (index: number) => {
    const novasMaterias = materias.filter((_, i) => i !== index);
    setMaterias(novasMaterias);
  };

  return (
    <div className="px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Lista de Matérias</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {materias.map((materia, index) => (
          <MateriaCard
            key={index}
            materia={materia}
            onRemove={() => removerMateria(index)}
          />
        ))}
      </div>

      <button
        onClick={() => setShowOverlay(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Adicionar Matéria
      </button>

      {showOverlay && (
        <MateriaFormOverlay
          onClose={() => setShowOverlay(false)}
          onSave={(materia) => {
            adicionarMateria(materia);
            setShowOverlay(false);
          }}
        />
      )}
    </div>
  );
};

export default Lista;
