import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [integrantes] = useState([
    {
      nombre: "Manuel Rios",
      descripcion: "Estudiante apasionado por el desarrollo y el análisis del comportamiento humano. Siempre en búsqueda de aprender cómo el lenguaje moldea nuestra realidad.",
      reflexion: "De esta competencia aprendí que observar a las personas por la forma en que se expresan y en que actúan puede ser más importante que lo que dicen, el lenguaje corporal dice más que mil palabras."
    },
    {
      nombre: "David Alexander Restrepo",
      descripcion: "Entusiasta de la tecnología y la comunicación efectiva. Le gusta entender los procesos y cómo interactuamos en el día a día.",
      reflexion: "Esta comunicación me enseñó a comunicar con las palabras de la gente."
    },
    {
      nombre: "Sebastian Ramirez",
      descripcion: "Creativo y analítico, siempre dispuesto a encontrar soluciones a través del diálogo y el trabajo en equipo.",
      reflexion: "Me llevo que la comunicación es uno de los poderes más grandes del ser humano y que con saberla utilizar nos puede ayudar a desarrollar y generar nuevas experiencias y emociones en nuestra vida y en la gente."
    }
  ]);

  return (
    <BlogContext.Provider value={{ integrantes }}>
      {children}
    </BlogContext.Provider>
  );
};