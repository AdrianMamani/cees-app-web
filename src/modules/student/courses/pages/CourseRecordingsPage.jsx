
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecordings from '../hooks/useRecordings';
import { ArrowLeft, Play } from 'lucide-react';

const CourseRecordingsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recordings = useRecordings(id);


  return (
    <div className="px-10 py-6 bg-gray-50 min-h-screen">
    
      <h1 className="text-3xl font-extrabold text-[#0070C0] mb-1">Ver Grabaciones</h1>
      <p className="text-gray-600 font-medium mb-6">Ejemplo</p>

      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-[#33ffd7] font-semibold text-sm mb-6 hover:underline"
      >
        <ArrowLeft size={18} className="mr-2" />
        Volver a la pantalla anterior
      </button>

      {/* recuadro de la lista de grabaciones del curso */}
      <div className="bg-[#338dff] p-1">
        <div className="bg-white overflow-hidden">
          
          <div className="grid grid-cols-4 px-6 py-3 bg-white text-gray-600 font-semibold text-sm border-b">
            <span>Nombre</span>
            <span>Fecha de inicio</span>
            <span>Duración</span>
            <span></span>
          </div>

         
          {recordings.map((rec) => (
            <div
              key={rec.id}
              className="grid grid-cols-4 items-center px-6 py-3 text-sm text-gray-700 border-b last:border-none"
            >
              <span>{rec.name}</span>
              <span>{rec.date}</span>
              <span>{rec.duration}</span>
              <a
                href={rec.link}
                className="flex items-center gap-1 text-black hover:underline"
              >
                <Play size={16} className="fill-[#0070C0] text-[#0070C0]" />
                <span className="text-sm font-medium">Mirar ahora</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseRecordingsPage;
