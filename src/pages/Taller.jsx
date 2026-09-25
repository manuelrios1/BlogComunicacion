import React from 'react';

const Taller = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-10 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-emerald-700 border-b-2 border-emerald-100 pb-6 mb-8">Taller: Tipos de Comunicación</h2>
      
      <div className="space-y-10 text-xl text-gray-700 leading-relaxed">
        <section>
          <h3 className="text-3xl font-bold text-emerald-600 mb-4">1. Tipos de comunicación humana</h3>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Pasiva:</strong> Las personas evitan mostrar sus opiniones o sentimientos, cediendo ante los demás para no generar conflictos.</li>
            <li><strong>Agresiva:</strong> Se defienden los propios derechos o deseos pasando por alto los de los demás, a menudo utilizando la confrontación, los gritos o la imposición.</li>
            <li><strong>Pasiva-Agresiva:</strong> Las personas de forma indirecta o sarcástica expresan sus necesidades y sentimientos.</li>
            <li><strong>Asertiva:</strong> Es el punto de equilibrio donde se expresan las ideas, necesidades y sentimientos de forma honesta, directa y respetuosa, sin vulnerar a los demás.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-3xl font-bold text-emerald-600 mb-4">2. Diferencia entre Agresiva y Pasiva</h3>
          <p>La comunicación agresiva prioriza de forma absoluta sus propias opiniones, necesidades y derechos, utilizando un estilo impositivo e intimidatorio. La pasiva guarda sus opiniones, prioriza siempre los deseos ajenos por encima de los propios y evita a toda costa el confronto, reprimiendo sus emociones y acumulando frustración.</p>
        </section>

        <section className="bg-green-50 p-8 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-emerald-800 mb-4">Ejemplo Cotidiano: Comunicación Pasivo-Agresiva</h3>
          <p className="italic text-gray-800">"Un compañero de trabajo llega tarde de forma recurrente afectando al equipo. En lugar de decírselo de frente de manera madura, otra persona opta por suspirar exageradamente cada vez que llega, tirar con fuerza las carpetas sobre el escritorio y responder de manera cortante y con monosílabos ('sí', 'como sea') cuando le preguntan algo, mostrando un enojo indirecto sin admitir verbalmente lo que le molesta."</p>
        </section>

        <section>
          <h3 className="text-3xl font-bold text-emerald-600 mb-6">3. Investigación: Comunicación No Verbal</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <span className="font-bold text-2xl text-emerald-700 block mb-2">Kinesis</span>
              El estudio de los movimientos corporales. Incluye posturas, inclinación del cuerpo y la forma de caminar, revelando actitudes y niveles de tensión.
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <span className="font-bold text-2xl text-emerald-700 block mb-2">Microexpresiones</span>
              Movimientos faciales rápidos e involuntarios que revelan emociones ocultas o verdaderas.
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <span className="font-bold text-2xl text-emerald-700 block mb-2">Proxemia</span>
              El uso del espacio físico y la distancia entre personas (íntima, personal, social y pública).
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <span className="font-bold text-2xl text-emerald-700 block mb-2">Paralenguaje</span>
              Cualidades no verbales de la voz: el tono, el volumen, el ritmo, los suspiros o las pausas.
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <span className="font-bold text-2xl text-emerald-700 block mb-2">Emblemas y Ademanes</span>
              Los emblemas son gestos con traducción verbal (pulgar arriba). Los ademanes son movimientos de manos que acompañan el discurso.
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <span className="font-bold text-2xl text-emerald-700 block mb-2">Entorno Social</span>
              Comunica mediante la vestimenta, el protocolo y el tipo de saludo. Refleja pertenencia y roles.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Taller;