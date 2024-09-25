// MateriasContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Materia {
  nome: string;
  descricao: string;
  imagem: string;
}

// Criar o contexto com as matérias e uma função para atualizá-las
export const MateriasContext = createContext<{
  materias: Materia[];
  setMaterias: React.Dispatch<React.SetStateAction<Materia[]>>;
}>({
  materias: [],
  setMaterias: () => {},
});

export const MateriasProvider = ({ children }: { children: ReactNode }) => {
  const [materias, setMaterias] = useState<Materia[]>([]);

  useEffect(() => {
    const savedMaterias = JSON.parse(localStorage.getItem("materias") || "[]");
    
    if (savedMaterias.length === 0) {
      // Se não houver matérias salvas, adiciona as matérias padrão
      const defaultMaterias = [
        { nome: "Matemática", descricao: "Descrição de Matemática", imagem: "https://via.placeholder.com/150" },
        { nome: "História", descricao: "Descrição de História", imagem: "https://via.placeholder.com/150" },
        { nome: "Ciência", descricao: "Descrição de Ciência", imagem: "https://via.placeholder.com/150" },
        { nome: "Geografia", descricao: "Descrição de Geografia", imagem: "https://via.placeholder.com/150" },
        { nome: "Física", descricao: "Descrição de Física", imagem: "https://via.placeholder.com/150" },
      ];
      localStorage.setItem("materias", JSON.stringify(defaultMaterias));
      setMaterias(defaultMaterias);
    } else {
      setMaterias(savedMaterias);
    }
  }, []);

  useEffect(() => {
    if (materias.length > 0) {
      localStorage.setItem("materias", JSON.stringify(materias));
    }
  }, [materias]);

  return (
    <MateriasContext.Provider value={{ materias, setMaterias }}>
      {children}
    </MateriasContext.Provider>
  );
};
