import React from 'react';

const Inicio = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in">
      <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-emerald-500 max-w-4xl">
        <h1 className="text-6xl font-black text-emerald-800 mb-8 leading-tight">
          La comunicación es el puente que conecta el pensamiento con el mundo.
        </h1>
        <p className="text-3xl text-gray-600 font-light leading-relaxed">
          Más allá de intercambiar palabras, es la habilidad vital para 
          <span className="font-bold text-emerald-600"> entender y ser entendidos</span>. 
          En un mundo lleno de ruido, comunicarnos asertivamente nos permite construir relaciones, 
          evitar conflictos y proyectar nuestras ideas con claridad, respeto y empatía.
        </p>
      </div>
    </div>
  );
};

export default Inicio;