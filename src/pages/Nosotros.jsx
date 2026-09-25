import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { Quote } from 'lucide-react';

const Nosotros = () => {
  const { integrantes } = useContext(BlogContext);

  return (
    <div>
      <h1 className="text-4xl font-bold text-emerald-800 text-center mb-12">Nuestro Equipo y Reflexiones</h1>
      
      <div className="space-y-12">
        {integrantes.map((persona, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden border border-gray-100">
            {/* Perfil */}
            <div className="bg-emerald-700 text-white p-8 md:w-1/3 flex flex-col justify-center items-center text-center">
              <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-4xl font-bold mb-4 shadow-inner">
                {persona.nombre.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold mb-2">{persona.nombre}</h2>
              <p className="text-emerald-100 text-sm">{persona.descripcion}</p>
            </div>
            
            {/* Reflexión */}
            <div className="p-8 md:w-2/3 flex flex-col justify-center bg-emerald-50/30">
              <div className="flex gap-4">
                <Quote size={40} className="text-emerald-300 flex-shrink-0 rotate-180" />
                <div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-3">Reflexión Significativa</h3>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium italic">
                    "{persona.reflexion}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nosotros;