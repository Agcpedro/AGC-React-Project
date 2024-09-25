import React, { useState } from 'react';

interface MateriaFormOverlayProps {
  onClose: () => void;
  onSave: (materia: { nome: string; descricao: string; imagem: string }) => void;
}

const MateriaFormOverlay: React.FC<MateriaFormOverlayProps> = ({ onClose, onSave }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagem(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    onSave({ nome, descricao, imagem });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Adicionar Nova Matéria</h2>
        <input
          type="text"
          placeholder="Nome da Matéria"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border p-2 mb-4 w-full"
        />
        {imagem && <img src={imagem} alt="Preview" className="mb-4 w-full h-40 object-cover" />}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MateriaFormOverlay;
