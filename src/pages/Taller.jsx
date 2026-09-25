import React from 'react';

export default function Taller() {
  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-8">Reflexión: Tipos de Comunicación</h2>

      <div className="bg-white p-8 rounded-xl shadow-md space-y-6 text-gray-800">
        <h3 className="text-2xl font-bold text-green-700">Objetivo: Identificar los tipos de comunicación en la comunicación asertiva</h3>
        
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <p className="font-bold mb-2">¿Cuáles son los tipos de comunicación que asumen los seres humanos en su interacción cotidiana?</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Comunicación Pasiva:</strong> Evitan mostrar sus opiniones o sentimientos, cediendo ante los demás para no generar conflictos.</li>
            <li><strong>Comunicación Agresiva:</strong> Defienden los propios derechos pasando por alto los de los demás (confrontación, gritos, imposición).</li>
            <li><strong>Comunicación Pasiva-Agresiva:</strong> Expresan sus necesidades y sentimientos de forma indirecta o sarcástica.</li>
            <li><strong>Comunicación Asertiva:</strong> Es el equilibrio. Se expresan las ideas de forma honesta, directa y respetuosa, sin vulnerar a los demás.</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <p className="font-bold mb-2">¿Cuál es la diferencia entre comunicación agresiva y comunicación pasiva?</p>
          <p>La comunicación agresiva prioriza de forma absoluta sus propias opiniones mediante un estilo impositivo e intimidatorio que vulnera a los demás. En cambio, la pasiva guarda sus opiniones, prioriza siempre los deseos ajenos, evita el conflicto a toda costa y acumula frustración.</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <p className="font-bold mb-2">Ejemplo de la vida cotidiana de comunicación pasiva-agresiva:</p>
          <p>Ocurre cuando un compañero de trabajo llega tarde de forma recurrente afectando al equipo. En lugar de decírselo de frente, otra persona suspira exageradamente, tira con fuerza las carpetas y responde de manera cortante con monosílabos ("sí", "como sea"), mostrando enojo indirecto sin admitir verbalmente lo que le molesta.</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <p className="font-bold mb-2">Características de la comunicación asertiva:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc ml-6">
            <li>Claridad y concisión</li>
            <li>Empatía</li>
            <li>Autenticidad y honestidad</li>
            <li>Uso del "Yo"</li>
            <li>Control emocional</li>
            <li>Respeto mutuo</li>
            <li>Escucha activa</li>
            <li>Congruencia en el lenguaje no verbal</li>
            <li>Orientación a la solución de problemas</li>
            <li>Capacidad para decir "No" sin culpa</li>
          </ul>
        </div>
      </div>

      <section className="bg-green-800 text-white p-8 rounded-xl shadow-md mt-10">
        <h3 className="text-2xl font-bold mb-6">Investigación: Comunicación no verbal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-700 p-4 rounded"><strong>1. Kinesis:</strong> Estudio del movimiento del cuerpo, posturas y gestos.</div>
          <div className="bg-green-700 p-4 rounded"><strong>2. Microexpresiones:</strong> Gestos faciales rápidos e involuntarios que revelan emociones reales.</div>
          <div className="bg-green-700 p-4 rounded"><strong>3. Proxemia:</strong> El uso y percepción del espacio personal y físico.</div>
          <div className="bg-green-700 p-4 rounded"><strong>4. Paralenguaje:</strong> Tono, volumen y ritmo de la voz que acompañan a las palabras.</div>
          <div className="bg-green-700 p-4 rounded"><strong>5. Emblemas y Ademanes:</strong> Gestos con significado cultural específico (ej: pulgar arriba).</div>
          <div className="bg-green-700 p-4 rounded"><strong>6. Entorno social:</strong> Vestimenta, protocolo y saludos como formas de comunicar identidad y respeto.</div>
        </div>
      </section>
    </div>
  );
}