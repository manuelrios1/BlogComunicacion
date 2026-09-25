import React from 'react';

const Tematicas = () => {
  const temas = [
    {
      titulo: "Introducción a la comunicación",
      contenido: "Todo parte de la pregunta ¿cómo me comunico? y de los 4 pilares para lograrlo: observar, escuchar, analizar y percibir las experiencias. Aparece el esquema 'condicionada → intención - sentimientos - subjetiva', mostrando que toda comunicación tiene una intención y un sentimiento detrás. Nunca es neutral."
    },
    {
      titulo: "Modelo de Roman Jakobson",
      contenido: "Un Emisor (E) envía un mensaje a través de un Canal hacia un Receptor (R), pasando por un Código (el lenguaje compartido) y dentro de un Contexto. A cada elemento le corresponde una función del lenguaje: la Emotiva (Emisor), Apelativa (Receptor), Fática (Canal), Referencial (Contexto) y Metalingüística (Código). Se complementa con las emociones básicas de Paul Ekman."
    },
    {
      titulo: "Proceso Comunicativo",
      contenido: "Síntesis en pasos del modelo: 1) Emotiva, 2) Referencial/Contexto, 3) Apelativa, 4) Fática/Canal, 5) Poética y 6) Metalingüística. La función Poética tiene que ver con embellecer el mensaje, la forma en que se dicen las cosas."
    },
    {
      titulo: "Modelo Tradicional vs. Jakobson",
      contenido: "En el modelo tradicional es lineal (Emisor -> Receptor). En Jakobson, las relaciones son más completas: el Canal y el Contexto se conectan directamente con ambos, mostrando que la comunicación está influenciada constantemente por su entorno."
    },
    {
      titulo: "Palabras Homófonas y Homónimas",
      contenido: "Relacionado con la función metalingüística. Homófonas suenan igual pero se escriben distinto (valla, vaya, baya). Homónimas se escriben igual pero significan distinto (café bebida, café color). El contexto es clave para la interpretación."
    },
    {
      titulo: "Comunicación Asertiva y Respeto",
      contenido: "Comunicación clara, directa y empática, ligada a la inteligencia emocional. El RESPETO se sostiene sobre tres pilares: la palabra (correcta), la entonación (precisa) y las acciones (coherentes). No basta con decir las cosas bien, hay que actuar acorde."
    },
    {
      titulo: "Tipos de comunicación y consecuencias",
      contenido: "Agresiva: impone el 'yo' y genera heridas. Pasiva: sumisa, genera frustración, afecta autoestima. Pasivo-agresiva: enojo indirecto. Agresivo-Pasiva: Enojo inpulsivo (Explota) Asertiva: el equilibrio. El mal manejo de emociones puede llevar a depresión o ansiedad (uso de PNL y Carl Jung)."
    }
  ];

  return (
    <div className="space-y-8 mt-16">
      <h2 className="text-4xl font-bold text-emerald-800 text-center mb-10 border-b-2 border-emerald-200 pb-4">Temáticas Vistas en Formación</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {temas.map((tema, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-emerald-500 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">{tema.titulo}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{tema.contenido}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Inicio = () => {
  return (
    <div className="animate-fade-in">
      {/* Introducción LETRA GRANDE */}
      <section className="bg-emerald-600 text-white p-12 rounded-2xl shadow-xl text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          La comunicación es el puente que conecta nuestras realidades
        </h1>
        <p className="text-3xl md:text-4xl font-light leading-snug max-w-4xl mx-auto">
          No se trata solo de hablar, sino de <strong>conectar, entender y ser entendido</strong>. Su importancia radica en que es la base de toda relación humana, permitiéndonos construir respeto, resolver conflictos y compartir nuestro mundo interno con los demás.
        </p>
      </section>
      
      <Tematicas />
    </div>
  );
};

export default Inicio;