import React, { useState, useEffect } from 'react';

const Lista: React.FC = () => {
  const baseMaterias = ["Matemática", "Português", "História", "Geografia", "Ciências"];

  // Recupera matérias do localStorage ou usa as matérias base
  const [materias, setMaterias] = useState<string[]>(() => {
    const storedMaterias = localStorage.getItem('materias');
    return storedMaterias ? JSON.parse(storedMaterias) : baseMaterias;
  });

  // Atualiza o localStorage sempre que a lista de matérias mudar
  useEffect(() => {
    localStorage.setItem('materias', JSON.stringify(materias));
  }, [materias]);

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
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Lista de Matérias</h1>

      <ul className="mb-4">
        {materias.map((materia, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
            <span>{materia}</span>
            <button
              onClick={() => removerMateria(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={adicionarMateria}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Adicionar Matéria
      </button>
    </div>
  );
};

export default Lista;
