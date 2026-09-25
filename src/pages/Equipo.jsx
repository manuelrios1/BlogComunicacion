import React from 'react';
import { UserCircle, AlertCircle, Lightbulb } from 'lucide-react';

const Equipo = () => {
  const integrantes = [
    {
      nombre: "Manuel Alejandro Ríos",
      rol: "Desarrollador / Estudiante",
      descripcion: "Joven desarrollador de 16 años desde Medellín. Estudiante del I.E. Federico Carrasquilla en articulación con el SENA y participante activo del Semillero Quipux. Apasionado por crear interfaces dinámicas con React y Tailwind CSS.",
      reflexion: "De esta competencia aprendí que observar a las personas por la forma en que se expresa y en que actúa puede ser más importante que lo que dice, el lenguaje corporal dice más que mil palabras.",
      conflicto: "Tengo conflicto conmigo porque a veces exijo mucho a la gente que quiero para que sean mejores, pero me he dado cuenta de que en algunas ocasiones no hacer nada, no mejorar también hace parte de avanzar; todos necesitamos descansar, aburrirnos y sentirnos niños otra vez."
    },
    {
      nombre: "David Alexander Restrepo",
      rol: "Desarrollador / Estudiante",
      descripcion: "Estudiante en formación técnica, apasionado por el desarrollo de software y el aprendizaje de nuevas herramientas tecnológicas orientadas a la solución de problemas.",
      reflexion: "Esta comunicación me enseño a comunicar con las palabras de la gente.",
      conflicto: "Tengo un conflicto con mi mamá, ella quiere que yo haga algo que no quiero hacer y a pesar de que le hablo y le insisto en dejarlo, no me deja y me presiona a continuar. Aún estoy lidiando en cómo solucionar esto."
    },
    {
      nombre: "Sebastián Ramírez",
      rol: "Desarrollador / Estudiante",
      descripcion: "Desarrollador en formación enfocado en el aprendizaje continuo y en la creación de proyectos colaborativos que integren lógica y buen diseño de interfaces.",
      reflexion: "Me llevo que la comunicación es uno de los poderes más grandes del ser humano y que con saberla utilizar nos puede ayudar a desarrollar y generar nuevas experiencias y emociones en nuestra vida y en la gente.",
      conflicto: "Tengo conflicto conmigo, soy muy duro conmigo mismo ya que muchas veces soy yo el que se pone limitaciones e ideas en la cabeza, sabiendo que el problema no está en mí sino en cómo me veo. Eso hace que pueda tener conflicto con la gente, ya que si yo no estoy bien lo hago expresar a los demás, pero si yo estoy bien nadie más me lo va a generar."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-emerald-800 mb-14">Nuestro Equipo, Reflexiones y Conflictos</h2>
      
      <div className="grid lg:grid-cols-3 gap-10">
        {integrantes.map((integrante, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <div className="bg-emerald-600 p-8 flex flex-col items-center text-white">
              <UserCircle size={80} className="mb-4 opacity-90" />
              <h3 className="text-3xl font-bold text-center">{integrante.nombre}</h3>
              <span className="text-emerald-200 text-xl mt-2">{integrante.rol}</span>
            </div>
            
            <div className="p-8 flex-grow flex flex-col space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-3">Perfil</h4>
                <p className="text-lg text-gray-700 leading-relaxed">{integrante.descripcion}</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="text-red-600" size={24}/>
                  <h4 className="text-sm uppercase tracking-widest text-red-800 font-bold">Conflicto</h4>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed">"{integrante.conflicto}"</p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-emerald-400 mt-auto">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="text-emerald-600" size={24}/>
                  <h4 className="text-sm uppercase tracking-widest text-emerald-800 font-bold">Reflexión Significativa</h4>
                </div>
                <p className="text-lg text-gray-800 italic leading-relaxed">"{integrante.reflexion}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipo;