import React, { useState } from 'react';

export default function Evidencias() {
  const [activeStory, setActiveStory] = useState('manuel');
  
  // Arreglo de nombres de imágenes (ubicadas en la carpeta public)
  const imagenes = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];

  const historias = {
    manuel: "Estaba la sapa caramelo sentada en la orilla del río cauca en el peñasco mas alto de la región, ella lucia muy elegante como si esperara a alguien pero a medida que pasaba el tiempo nadie llego, ya era de noche y marchó a su hogar un poco agripada y con bastante hambre se comió un moco que saco de su nariz, un sapo vio eso y empezó a vomitar, la sapa se dio cuenta de su presencia y salió a correr avergonzada como si le fueran clavado una estaca del susto, llegó a su casa y se encerró allí miro a la ventana y el sapo estaba hay. estaba enredado en un nudo y pidiendo ayuda, la sapa salio de la casa y lo ayudo, el sapo le dio las gracias pero era una trampa el cogio una tapa y se la tiro, la sapa callo al suelo y el sapo pensó que la mato, asi que le dio respiración boca a boca con la esperanza de que estuviera con vida pero al final la sapa nunca desperto.",
    david: "Estaba la sapa Caramelo sentaba en el rio cauca en el peñasco mas alto de la región pensando sobre la vida cuando se iba para la casa se cayo y le salió un moco , se levanto y se fue al bosque y se encontró en un árbol que estaba una ESTACA. Y después se fue caminando en busca de un atajo para ir a la casa y se cayo y le toco hacer un nudo en los zapatos. Despues de esto se encontró una Tapa en un cadáver de un hombre muerto. Pero se entero que estaba en una zona de minas colocada por los ELN y no había esperanza y fin.",
    sebastian: "Estaba la Sapa caramelo sentada en la orilla del rio cauca en el pelado más alto del a región. Pensando en qué hacer con su vida mientras ella pensaba paso un águila dorada que quería hablar con ella y cuál fue su motivo de estar allí y ella no pudo darle una respuesta clara, al final quiso no acabar con su vida. Pero el águila se dio cuenta que tenía un moco tan grande que tratando de quitárselo se tropezó con la rana y se fueron al abismo. El moco del águila callo en la boca de la rana y cayeron en la cabaña de un granjero y el águila quedo atrapada en una estaca con púas. La rana no sabía que hacer ni que decir como si tuviera un nudo en la garganta. Trató de hablar hasta que pudo y llamo a alguien, después de salvar su vida y mientras el campesino venía se calló de la forma más tonta con una simple tapa y quedó sin moverse. Ella al ver que el campesino se levantó lo ayudo y llamaron a una ambulancia para que el águila se mejorara le dio esperanza de que nada es tan malo y que siempre va a ver una solución. FIN."
  };

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Trabajos Individuales: Sapa Caramelo</h2>
        
        {/* Usamos estado de React (useState) para cambiar de historia */}
        <div className="flex justify-center gap-4 mb-6">
          <button onClick={() => setActiveStory('manuel')} className={`px-4 py-2 rounded font-bold transition ${activeStory === 'manuel' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800 hover:bg-green-300'}`}>Historia Manuel</button>
          <button onClick={() => setActiveStory('david')} className={`px-4 py-2 rounded font-bold transition ${activeStory === 'david' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800 hover:bg-green-300'}`}>Historia David</button>
          <button onClick={() => setActiveStory('sebastian')} className={`px-4 py-2 rounded font-bold transition ${activeStory === 'sebastian' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800 hover:bg-green-300'}`}>Historia Sebastian</button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-300 min-h-[250px] flex items-center">
          <p className="text-lg text-gray-700 italic leading-relaxed">
            "{historias[activeStory]}"
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center border-t-2 border-green-200 pt-8">Galería de Evidencias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imagenes.map((imgName, index) => (
            <div key={index} className="bg-white p-2 rounded-lg shadow-md hover:scale-105 transition transform duration-300">
              {/* Ajusta la extensión (.jpg, .png) según el formato real de tus imágenes */}
              <img src={`/${imgName}.jpeg`} alt={`Evidencia ${imgName}`} className="w-full h-48 object-cover rounded" 
                   onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300/c6f6d5/22543d?text=Imagen+Faltante'; }} />
              <p className="text-center mt-2 text-sm font-semibold text-green-700 capitalize">Imagen {imgName}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}