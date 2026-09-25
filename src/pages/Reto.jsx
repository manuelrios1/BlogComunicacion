import React from 'react';
import { BrainCircuit, MessageCircle, ShieldAlert } from 'lucide-react';

const Reto = () => {
  const retos = [
    {
      nombre: "Manuel Rios",
      icono: <BrainCircuit size={48} className="text-emerald-600 mb-4" />,
      titulo: "Me molesto por que las personas no hacen lo que deben de hacer",
      texto: "Durante mucho tiempo eh tratado de ser una persona expcional, que la gente me vea y diga yo quiero ser asi y me exigo mucho por conseguir eso, creo que por eso me da rabia o estres que una persona haga las cosas a medias, sobre todo con las personas que yo quiero que esten bien, les exigo mucho pero no son yo y eso esta bien, el estres tambien se debe a que me siento mal por descansar, siempre que lo hago me acuerdo de que debo de hacer algo y si no lo hago me siento mal conmigo mismo por eso cuando veo a una persona descansado me da ira pero no por que lo hace si no por la envidia. Pero la base de todo, mi actitud; es por mi niñes me juzgaban mucho y me prometi que nunca mas se iban a burlar de mi"
    },
    {
      nombre: "David Alexander Restrepo",
      icono: <ShieldAlert size={48} className="text-emerald-600 mb-4" />,
      titulo: "Soy muy pacifico y voy a estallar",
      texto: "Mi conflicto interno personal siempre ha estado ligado a la forma en que reacciono cuando quiero hacer algo pero permito que las personas decidan por mi, esn este momento estoy peliado con mi madre por eso, estoy tan aconstumbrado a hacer lo que los demas digan que no se como decirle a ella que estoy en desacuerdo con lo que dice y que quiero hacer otra cosa, pensaba que era ella la que no me entendia pero nunca se lo eh echo entender."
    },
    {
      nombre: "Sebastian Ramirez",
      icono: <MessageCircle size={48} className="text-emerald-600 mb-4" />,
      titulo: "Suelo juzgarme mucho y me hace tener una mala comunicacion",
      texto: "Tengo un conflicto con el pensamiento tan limitante que yo mismo me pongo ya que me acostumbre a juzgarme y se muy duro conmigo mismo, eso hace que tenga una mala comunicacion ya que no soy capaz de tratarme mejor, y creo que uno decide con quien tiene una mala comunicacion y ya que si yo estoy mal, voy a tener conflicto con la gente mientras que si yo estoy bien decido con quien tengo o no esa mala comunicacion."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-emerald-900 mb-4">El Conflicto Interno Personal</h1>
        <p className="text-2xl text-gray-600">El reto de encontrar nuestra propia voz asertiva</p>
      </div>

      <div className="space-y-12">
        {retos.map((reto, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-emerald-100 flex flex-col md:flex-row hover:shadow-2xl transition-shadow duration-300">
            
            {/* Sección visual del integrante */}
            <div className="bg-emerald-50 md:w-1/3 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-emerald-100">
              {reto.icono}
              <h2 className="text-3xl font-bold text-emerald-900">{reto.nombre}</h2>
            </div>

            {/* Sección del texto del reto */}
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-emerald-700 mb-4">{reto.titulo}</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                {reto.texto}
              </p>
              <div className="mt-6 pl-4 border-l-4 border-emerald-500 italic text-emerald-800 text-lg">
                "La verdadera asertividad nace cuando enfrentamos y sanamos nuestro conflicto interno."
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Reto;