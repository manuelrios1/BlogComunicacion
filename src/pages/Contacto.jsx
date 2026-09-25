import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import Swal from 'sweetalert2';
import { UploadCloud, Send } from 'lucide-react';

const Contacto = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Implementación de useCallback para Dropzone
  const onDrop = useCallback(acceptedFiles => {
    // Aquí podrías procesar el archivo o guardarlo en estado si el backend lo requiere.
    console.log("Archivo cargado:", acceptedFiles[0]);
    Swal.fire({
      icon: 'success',
      title: 'Archivo adjuntado',
      text: `Has adjuntado: ${acceptedFiles[0].name}`,
      confirmButtonColor: '#047857'
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Envío simulado o conexión real con Formspree
  const onSubmit = async (data) => {
    try {
      // Reemplaza la URL por la tuya de Formspree: 'https://formspree.io/f/TU_ID'
      const response = await fetch('https://formspree.io/f/xknkearj', { // ID de prueba (Reemplazar)
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if(response.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Mensaje Enviado!',
          text: 'Gracias por tus comentarios sobre nuestro blog.',
          confirmButtonColor: '#047857'
        });
        reset(); // Limpia el formulario
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al enviar el mensaje.',
        confirmButtonColor: '#047857'
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-emerald-800 text-center mb-4">Déjanos tu Comentario</h1>
      <p className="text-center text-gray-600 mb-8">Usa este formulario para darnos retroalimentación sobre la formación de comunicaciones.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
        
        <div>
          <label className="block text-emerald-900 font-bold mb-2">Nombre completo</label>
          <input 
            type="text" 
            className="w-full border-2 border-emerald-100 rounded-lg p-3 focus:border-emerald-500 focus:outline-none transition"
            {...register('nombre', { required: "El nombre es obligatorio" })} 
          />
          {errors.nombre && <span className="text-red-500 text-sm mt-1">{errors.nombre.message}</span>}
        </div>

        <div>
          <label className="block text-emerald-900 font-bold mb-2">Correo electrónico</label>
          <input 
            type="email" 
            className="w-full border-2 border-emerald-100 rounded-lg p-3 focus:border-emerald-500 focus:outline-none transition"
            {...register('email', { 
              required: "El correo es obligatorio",
              pattern: { value: /^\S+@\S+$/i, message: "Correo inválido" }
            })} 
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
        </div>

        <div>
          <label className="block text-emerald-900 font-bold mb-2">Mensaje o Reflexión</label>
          <textarea 
            rows="4" 
            className="w-full border-2 border-emerald-100 rounded-lg p-3 focus:border-emerald-500 focus:outline-none transition resize-none"
            {...register('mensaje', { required: "Escribe un mensaje" })}
          ></textarea>
          {errors.mensaje && <span className="text-red-500 text-sm mt-1">{errors.mensaje.message}</span>}
        </div>

        {/* React Dropzone */}
        <div>
          <label className="block text-emerald-900 font-bold mb-2">Adjuntar archivo (Opcional)</label>
          <div 
            {...getRootProps()} 
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition ${isDragActive ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300 hover:border-emerald-400 hover:bg-gray-50'}`}
          >
            <input {...getInputProps()} />
            <UploadCloud size={40} className="mx-auto text-emerald-600 mb-2" />
            {isDragActive ? (
              <p className="text-emerald-700 font-bold">¡Suelta el archivo aquí!</p>
            ) : (
              <p className="text-gray-500">Arrastra un archivo aquí, o haz clic para seleccionar</p>
            )}
          </div>
        </div>

        <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-4 rounded-xl transition flex items-center justify-center gap-2">
          <Send size={20} /> Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contacto;