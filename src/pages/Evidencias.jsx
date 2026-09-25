import React from 'react';
import { Download, FileText } from 'lucide-react';

const Evidencias = () => {
  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-emerald-900 mb-4">Evidencias de Aprendizaje</h1>
        <p className="text-2xl text-gray-600">Recopilación de los trabajos y talleres realizados durante la formación.</p>
      </div>

      {/* SECCIÓN 1: Taller de Tipos de Comunicación y No Verbal */}
      <section className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-emerald-500">
        <h2 className="text-4xl font-bold text-emerald-900 mb-8 border-b-2 border-emerald-100 pb-4">Taller: Tipos de Comunicación</h2>
        <div className="space-y-8 text-xl text-gray-700 leading-relaxed">
          
          <div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-4">1. ¿Cuáles son los tipos de comunicación según la interacción cotidiana?</h3>
            <ul className="list-disc pl-8 space-y-3">
              <li><strong>Comunicación Pasiva:</strong> Evitan mostrar sus opiniones o sentimientos, cediendo ante los demás para no generar conflictos.</li>
              <li><strong>Comunicación Agresiva:</strong> Se defienden los propios deseos pasando por alto los de los demás (confrontación, gritos).</li>
              <li><strong>Comunicación Pasiva-Agresiva:</strong> Expresan sus necesidades y enojos de forma indirecta o sarcástica.</li>
              <li><strong>Comunicación Asertiva:</strong> El punto de equilibrio donde se expresan ideas de forma honesta, directa y respetuosa.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-4">2. Diferencia entre comunicación agresiva y pasiva</h3>
            <p>La agresiva prioriza absolutamente sus propias opiniones con un estilo impositivo e intimidatorio. La pasiva guarda sus opiniones, prioriza los deseos ajenos y reprime emociones acumulando frustración.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-4">3. Ejemplo cotidiano de comunicación pasiva-agresiva</h3>
            <p className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500 italic">
              Un compañero llega tarde de forma recurrente. En lugar de decírselo de frente, otra persona suspira exageradamente cuando llega, tira carpetas sobre el escritorio y responde con monosílabos ("sí", "como sea"), mostrando enojo indirecto sin admitirlo verbalmente.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-4">4. Características de la comunicación asertiva</h3>
            <div className="flex flex-wrap gap-3 mt-4">
              {["Claridad y concisión", "Empatía", "Autenticidad", "Uso del 'Yo'", "Control emocional", "Respeto mutuo", "Escucha activa", "Orientación a soluciones", "Decir 'No' sin culpa"].map(tag => (
                <span key={tag} className="bg-emerald-100 text-emerald-900 px-4 py-2 rounded-lg font-bold text-lg">{tag}</span>
              ))}
            </div>
          </div>

          <hr className="my-10 border-emerald-200" />

          <h2 className="text-4xl font-bold text-emerald-900 mb-8 border-b-2 border-emerald-100 pb-4">Investigación: Comunicación No Verbal a Fondo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-2xl font-bold text-emerald-800 mb-3">1. Kinesis (Kinesia)</h4>
              <p className="text-lg">Es el estudio de los movimientos corporales, gestos y posturas. Nuestro cuerpo transmite mensajes continuos (cruzar los brazos, asentir) que pueden confirmar o contradecir lo que decimos con palabras.</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-2xl font-bold text-emerald-800 mb-3">2. Microexpresiones</h4>
              <p className="text-lg">Expresiones faciales involuntarias y fugaces que duran fracciones de segundo. Descubiertas por Paul Ekman, revelan las emociones verdaderas (alegría, ira, desprecio) antes de que podamos ocultarlas.</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-2xl font-bold text-emerald-800 mb-3">3. Proxemia</h4>
              <p className="text-lg">Es el uso y manejo del espacio personal y la distancia física entre las personas al interactuar. Varía según la cultura y el nivel de confianza (íntima, personal, social, pública).</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-2xl font-bold text-emerald-800 mb-3">4. Paralenguaje</h4>
              <p className="text-lg">Son las cualidades no verbales de la voz: el tono, el volumen, el ritmo, los silencios y las pausas. "No es lo que dices, sino cómo lo dices".</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-2xl font-bold text-emerald-800 mb-3">5. Emblemas y Ademanes</h4>
              <p className="text-lg">Son gestos conscientes que tienen una traducción verbal directa y conocida por un grupo cultural (por ejemplo, levantar el pulgar para decir "todo bien" o hacer la señal de "paz").</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-2xl font-bold text-emerald-800 mb-3">6. Entorno Social</h4>
              <p className="text-lg">Incluye la vestimenta, el protocolo, los códigos de saludo y el aspecto general. Todo esto comunica estatus, pertenencia a un grupo y respeto por el contexto social en el que estamos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Cuentos Sapa Caramelo */}
      <section>
        <h2 className="text-4xl font-bold text-emerald-900 mb-8 text-center">Ejercicio Perceptivo: La Sapa Caramelo</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-emerald-50">
            <h3 className="font-bold text-2xl text-emerald-800 mb-4 border-b-2 border-emerald-100 pb-3">Por: Manuel Rios</h3>
            <p className="text-gray-700 text-xl italic leading-relaxed">
              Estaba la sapa Caramelo sentada en la orilla del río Cauca en el peñasco más alto de la región, ella lucía muy elegante... un sapo vio eso y empezó a vomitar, la sapa se dio cuenta... salió a correr avergonzada como si le hubieran clavado una estaca del susto. Llegó a su casa... y el sapo estaba ahí enredado en un nudo... era una trampa, él cogió una tapa y se la tiró. La sapa cayó... al final la sapa nunca despertó.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-emerald-50">
            <h3 className="font-bold text-2xl text-emerald-800 mb-4 border-b-2 border-emerald-100 pb-3">Por: David Restrepo</h3>
            <p className="text-gray-700 text-xl italic leading-relaxed">
              Estaba la sapa Caramelo sentada en el río Cauca en el peñasco más alto... se cayó y le salió un moco, se levantó y se fue al bosque y se encontró en un árbol una ESTACA. Después se fue caminando... se cayó y le tocó hacer un nudo en los zapatos. Se encontró una Tapa en un cadáver... pero se enteró que estaba en una zona de minas... y no había esperanza y fin.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-emerald-50">
            <h3 className="font-bold text-2xl text-emerald-800 mb-4 border-b-2 border-emerald-100 pb-3">Por: Sebastian Ramirez</h3>
            <p className="text-gray-700 text-xl italic leading-relaxed">
              Estaba la Sapa Caramelo sentada en la orilla del río... pasó un águila dorada... el águila se dio cuenta que tenía un moco tan grande que tratando de quitárselo se tropezó con la rana... terminaron en la cabaña de un granjero y el águila quedó atrapada en una estaca... la rana como si tuviera un nudo en la garganta llamó a alguien. Se cayó con una simple tapa... le dio otra oportunidad... le dio esperanza de que nada es tan malo. FIN.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Archivos Descargables */}
      <section className="bg-emerald-900 text-white p-12 rounded-3xl shadow-2xl flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">Descargar Archivos Originales</h2>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <a href="/Comunicacion.pdf" download="Comunicaciones_Manuel_Rios.pdf" className="flex items-center justify-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold text-xl hover:bg-emerald-100 hover:scale-105 transition transform shadow-lg w-full sm:w-auto">
            <FileText size={28} /> Manuel Rios (PDF) <Download size={24} />
          </a>
          <a href="/2EV0 _ TALLER TIPOS DE COMUNICACIÓN.docx" download="Taller_Seb_David.docx" className="flex items-center justify-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold text-xl hover:bg-emerald-100 hover:scale-105 transition transform shadow-lg w-full sm:w-auto">
            <FileText size={28} /> Seb/David (DOCX) <Download size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Evidencias;