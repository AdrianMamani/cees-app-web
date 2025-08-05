import React from 'react';
import { FaSearch, FaPlus, FaEye, FaEdit, FaEllipsisV } from 'react-icons/fa';

export default function CourseAdminPage() {
  const cursos = [
    {
      id: 1,
      imagen: 'https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg',
      titulo: 'Estrategias Didácticas',
      descripcion: 'Curso completo sobre metodologías y estrategias didácticas modernas para la educación superior.',
      profesor: 'José Valdez',
      precio: 'S/ 500',
      duracion: '120h',
      certificado: 'Sí',
    },
    {
      id: 2,
      imagen: 'https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg',
      titulo: 'Estrategias Didácticas',
      descripcion: 'Curso completo sobre metodologías y estrategias didácticas modernas para la educación superior.',
      profesor: 'José Valdez',
      precio: 'S/ 500',
      duracion: '120h',
      certificado: 'Sí',
    },
    {
      id: 3,
      imagen: 'https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg',
      titulo: 'Estrategias Didácticas',
      descripcion: 'Curso completo sobre metodologías y estrategias didácticas modernas para la educación superior.',
      profesor: 'José Valdez',
      precio: 'S/ 500',
      duracion: '120h',
      certificado: 'Sí',
    },
  ];

  return (
    <div className="p-8">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-4 text-green-600">Cursos</h1>

      {/* Buscador y botón */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-6">
        <div className="flex items-center bg-white border rounded px-3 py-2 w-64 shadow-sm">
          <FaSearch className="text-gray-400 mr-2 text-sm" />
          <input
            type="text"
            placeholder="Buscar curso..."
            className="outline-none w-full text-sm"
          />
        </div>
        {/* Botón Crear */}
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm rounded px-4 py-2 shadow">
          <FaPlus className="mr-2" /> Crear Nuevo Curso
        </button>
      </div>

      {/* Tarjetas */}
      <div className="flex flex-wrap justify-center gap-17">
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl w-[350px] h-[500px] flex flex-col"
          >
            {/* Imagen */}
            <img
              src={curso.imagen}
              alt="Curso"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            {/* Contenido */}
            <div className="p-4 flex flex-col flex-1 justify-between">
              {/* Título y descripción */}
              <div>
                <h2 className="text-xl font-bold mb-2">{curso.titulo}</h2>
                <p className="mb-2 text-sm text-gray-700">{curso.descripcion}</p>
                {/* Información adicional */}
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-semibold">Profesor:</span>
                    <span className="ml-2">{curso.profesor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Precio:</span>
                    <span className="ml-2">{curso.precio}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Duración:</span>
                    <span className="ml-2">{curso.duracion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Certificado:</span>
                    <span className="ml-2">{curso.certificado}</span>
                  </div>
                </div>
              </div>
              {/* Botones */}
              <div className="flex justify-between items-center mt-4">
                <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 w-24 h-10 text-sm">
                  <FaEye className="mr-2" /> Ver
                </button>
                <button className="flex items-center bg-green-600 hover:bg-green-700 text-white rounded px-4 py-2 w-24 h-10 text-sm">
                  <FaEdit className="mr-2" /> Editar
                </button>
                <button className="flex items-center justify-center bg-[#4b6c63] hover:bg-[#3b5a52] rounded p-2 w-10 h-10">
                  <FaEllipsisV className="text-white text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}