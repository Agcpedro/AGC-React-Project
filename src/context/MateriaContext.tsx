// MateriasContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";

// Criar o contexto com as matérias e uma função para atualizá-las
export const MateriasContext = createContext<{
  materias: string[];
  setMaterias: React.Dispatch<React.SetStateAction<string[]>>;
}>({
  materias: [],
  setMaterias: () => {},
});

export const MateriasProvider = ({ children }: { children: ReactNode }) => {
  const [materias, setMaterias] = useState<string[]>([]);

  useEffect(() => {
    const savedMaterias = JSON.parse(localStorage.getItem("materias") || "[]");
    setMaterias(savedMaterias.length ? savedMaterias : ["Matemática", "História", "Ciência", "Geografia", "Física"]);
  }, []);

  useEffect(() => {
    localStorage.setItem("materias", JSON.stringify(materias));
  }, [materias]);

  return (
    <MateriasContext.Provider value={{ materias, setMaterias }}>
      {children}
    </MateriasContext.Provider>
  );
};
