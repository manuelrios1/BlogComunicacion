import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function Reflexiones() {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Reflexiones Finales</h2>
        <p className="text-lg text-gray-600">Lo que aprendimos significativamente de la competencia este trimestre.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-8 border-green-600 flex gap-4">
          <Lightbulb className="text-green-500 shrink-0 mt-1" size={32} />
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Manuel Rios</h3>
            <p className="text-gray-700">"De esta competencia aprendi que observar a las personas por la forma en que se expresa y en que actua puede ser mas importante que lo que dice, el lenguaje corporal dice mas que mil palabras."</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-8 border-green-500 flex gap-4">
          <Lightbulb className="text-green-400 shrink-0 mt-1" size={32} />
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-2">David Alejander</h3>
            <p className="text-gray-700">"El aprendizaje más significativo fue reconocer mis propios estilos de comunicación en momentos de estrés. Los retos, como el cuento de la sapa, me mostraron que la creatividad fluya mejor cuando hay un entorno de respeto y escucha activa. Ahora me siento más preparado para el ámbito laboral."</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-8 border-green-400 flex gap-4">
          <Lightbulb className="text-green-300 shrink-0 mt-1" size={32} />
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Sebastian Ramirez</h3>
            <p className="text-gray-700">"Comprender la importancia de la Kinesis y la Proxemia me abrió los ojos. A veces decimos más con nuestros gestos que con las palabras. Finalizo este trimestre con mucha más confianza para expresarme y con la capacidad de decir 'no' de manera empática y respetuosa."</p>
          </div>
        </div>
      </div>
    </div>
  );
}