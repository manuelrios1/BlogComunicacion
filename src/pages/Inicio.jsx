import React from 'react';

export default function Inicio() {
  return (
    <div className="space-y-12">
      {/* Introducción */}
      <section className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500">
        <h2 className="text-3xl font-bold text-green-800 mb-4">¿Qué es la comunicación y su importancia?</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          La comunicación es el pilar fundamental de las relaciones humanas y del trabajo en equipo. No se trata únicamente de transmitir un mensaje, sino de saber escuchar, comprender y conectar con el otro. Su importancia radica en que nos permite resolver conflictos de forma pacífica, expresar nuestras ideas con claridad y construir entornos donde prima la asertividad y el respeto, habilidades vitales para nuestro futuro como desarrolladores de software.
        </p>
      </section>

      {/* Temática vista */}
      <section>
        <h2 className="text-3xl font-bold text-green-800 mb-6 border-b-2 border-green-200 pb-2">Temática vista en formación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-green-700">1. Tipos de Comunicación</h3>
            <p className="text-gray-700">Análisis profundo de la comunicación pasiva, agresiva, pasiva-agresiva y asertiva.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-green-700">2. Comunicación No Verbal</h3>
            <p className="text-gray-700">Estudio de Kinesis, Microexpresiones, Proxemia, Paralenguaje y Emblemas.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-green-700">3. Escucha Activa</h3>
            <p className="text-gray-700">Técnicas para mejorar la comprensión y evitar barreras en la comunicación.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2 text-green-700">4. Trabajo en Equipo</h3>
            <p className="text-gray-700">Aplicación de la comunicación asertiva en la resolución de retos grupales.</p>
          </div>
        </div>
      </section>

      {/* Integrantes */}
      <section>
        <h2 className="text-3xl font-bold text-green-800 mb-6 border-b-2 border-green-200 pb-2">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow border border-green-100 text-center hover:shadow-lg transition">
            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">M</div>
            <h3 className="text-xl font-bold text-green-800">Manuel Rios</h3>
            <p className="text-gray-600 mt-2">Apasionado por la programación y el desarrollo web. Enfocado en aplicar la comunicación asertiva para liderar y organizar proyectos tecnológicos de manera eficiente.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-green-100 text-center hover:shadow-lg transition">
            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">D</div>
            <h3 className="text-xl font-bold text-green-800">David Alejander</h3>
            <p className="text-gray-600 mt-2">Destaca por su capacidad de escuchar y hacer un trabajo colaborativo. Siempre busca soluciones a los problemas a través del diálogo.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-green-100 text-center hover:shadow-lg transition">
            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">S</div>
            <h3 className="text-xl font-bold text-green-800">Sebastian Ramirez</h3>
            <p className="text-gray-600 mt-2">Orientado a los detalles y la buena expresión oral. Su fortaleza es mantener el equilibrio y la empatía dentro del grupo ante situaciones de estrés.</p>
          </div>
        </div>
      </section>
    </div>
  );
}