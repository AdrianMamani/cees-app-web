import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePendingTasks from '../hooks/usePendingTasks';
import { ArrowLeft, FileText } from 'lucide-react';

const PendingTaskDetailPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const tasks = usePendingTasks();
  const task = tasks.find(t => t.id === parseInt(id));

  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  if (!task) return <div className="p-6 text-center text-red-600">Tarea no encontrada</div>;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim() && !file) {
      setError('Debes escribir una entrega o subir un archivo antes de enviar.');
      return;
    }

    setError('');
    alert('Entrega enviada correctamente');
    console.log({ texto: text, archivo: file });
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-6 md:px-8 space-y-6">

      {/* titulo y curso */}
      <div className="max-w-4xl mx-auto space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700">{task.title}</h1>
        <p className="text-gray-500 text-sm md:text-base">{task.course}</p>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:underline text-sm md:text-base mt-2"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Volver a la pantalla anterior
        </button>
      </div>

      {/* modal para instrucciones*/}
      <section className="bg-white border border-gray-200 shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Instrucciones</h2>
        <p className="text-gray-700 text-sm leading-relaxed">{task.description}</p>
      </section>

      {/* modal para entrega y ...*/}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 shadow-md rounded-lg p-6 space-y-6 max-w-4xl mx-auto"
      >

        {/* para entregar */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Entrega</h2>
          <textarea
            placeholder="Haga clic para agregar texto"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 min-h-[120px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        {/* para subir archivos */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Subir archivos</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <label>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded cursor-pointer hover:bg-green-700 text-sm shadow-sm">
                <FileText className="w-4 h-4" />
                Seleccionar archivo
              </span>
            </label>
            <span className="text-sm text-gray-600">
              {file ? file.name : 'Ningún archivo seleccionado'}
            </span>
          </div>
        </div>

        {/* para mensaje en caso de error */}
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        {/* butonnes */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 text-sm"
          >
            Salir
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm flex items-center gap-2 shadow-md"
          >
            <span>Enviar</span>
            <span className="text-lg">➤</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PendingTaskDetailPage;
