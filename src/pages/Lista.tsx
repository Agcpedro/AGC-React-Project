import React, { useContext } from 'react';
import { MateriasContext } from '../context/MateriaContext';

const Lista: React.FC = () => {
  const { materias, setMaterias } = useContext(MateriasContext);

  // Função para adicionar uma nova matéria
  const adicionarMateria = () => {
    const novaMateria = prompt("Digite o nome da nova matéria:");
    if (novaMateria) {
      setMaterias([...materias, novaMateria]);
    }
  };

  // Função para remover uma matéria pelo índice
  const removerMateria = (index: number) => {
    const novasMaterias = materias.filter((_, i) => i !== index);
    setMaterias(novasMaterias);
  };

  return (
    <div className="px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Lista de Matérias</h1>

      {/* Grid para exibir os cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {materias.map((materia, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold mb-4">{materia}</h2>
            <button
              onClick={() => removerMateria(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 mt-auto"
            >
              Remover
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={adicionarMateria}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Adicionar Matéria
      </button>
    </div>
  );
};

export default Lista;
