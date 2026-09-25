import React from 'react';
import { PenTool } from 'lucide-react';

const Reto = () => {
  const cuentos = [
    {
      autor: "Manuel Ríos",
      texto: "Estaba la sapa caramelo sentada en la orilla del río cauca en el peñasco mas alto de la región, ella lucia muy elegante como si esperara a alguien pero a medida que pasaba el tiempo nadie llego, ya era de noche y marchó a su hogar un poco agripada y con bastante hambre se comió un moco que saco de su nariz, un sapo vio eso y empezó a vomitar, la sapa se dio cuenta de su presencia y salió a correr avergonzada como si le fueran clavado una estaca del susto, llegó a su casa y se encerró allí miro a la ventana y el sapo estaba hay. estaba enredado en un nudo y pidiendo ayuda, la sapa salio de la casa y lo ayudo, el sapo le dio las gracias pero era una trampa el cogio una tapa y se la tiro, la sapa callo al suelo y el sapo pensó que la mato, asi que le dio respiración boca a boca con la esperanza de que estuviera con vida pero al final la sapa nunca desperto."
    },
    {
      autor: "David Alexander Restrepo",
      texto: "Estaba la sapa Caramelo sentaba en el rio cauca en el peñasco mas alto de la región pensando sobre la vida cuando se iba para la casa se cayo y le salió un moco, se levanto y se fue al bosque y se encontró en un árbol que estaba una ESTACA. Y después se fue caminando en busca de un atajo para ir a la casa y se cayo y le toco hacer un nudo en los zapatos. Despues de esto se encontró una Tapa en un cadáver de un hombre muerto Pero se entero que estaba en una zona de minas colocada por los ELN y no había esperanza y fin."
    },
    {
      autor: "Sebastián Ramírez",
      texto: "Estaba la Sapa caramelo sentada en la orilla del rio cauca en el pelado más alto del a región Pensando en qué hacer con su vida mientras ella pensaba paso un águila dorada que quería hablar con ella y cuál fue su motivo de estar allí y ella no pudo darle una respuesta clara, al final quiso no acabar con su vida Pero el águila se dio cuenta que tenía un moco moco tan grande Pero tan grande que tratando de quitárselo se tropezó con la rana y se fueron al abismo al tropezar con la rana el moco del águila callo en la boca de la rana y cayeron en un largo tiempo que terminaron en la cabaña de un granjero y el águila quedo atrapada en una estaca con alrededor de púas la rana no sabía que hacer ni que decir como si tuviera un nudo en la garganta Pero trato y trato de hablar hasta que pudo y llamo a alguien alrededor a ayudarla que alguien estaba herido después de salvar su vida y mientras el campesino venía se calló de la forma más tonta que al decirlo da gracia con una simple tapa y quedó sin moverse como si hubiera muerto ella al no ver lo que valía su vida al punto de querer acabarla se dio cuenta que la vida es un momento y que gracias a lo que le sucedió ese día le dio otra oportunidad y al ver que el campesino se levantó lo ayudo y llamaron a una ambulancia para que el águila se mejorara le dio esperanza de que nada es tan malo y que siempre va a ver una solución. FIN"
    }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-emerald-800">Reto de Creación</h2>
        <p className="text-gray-600 mt-4 text-2xl">Palabras clave: MOCO, ESTACA, NUDO, TAPA, ESPERANZA</p>
      </div>
      
      <div className="space-y-10 max-w-5xl mx-auto">
        {cuentos.map((cuento, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-emerald-400 relative">
            <div className="absolute -top-5 -left-5 bg-emerald-500 text-white p-3 rounded-full shadow-lg">
              <PenTool size={28} />
            </div>
            <h3 className="text-3xl font-bold text-emerald-700 mb-4 ml-6">{cuento.autor}</h3>
            <p className="text-xl text-gray-800 leading-relaxed italic">"{cuento.texto}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reto;