import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEye, FaEdit, FaEllipsisV, FaTimes, FaSave } from 'react-icons/fa';

export default function CourseAdminPage() {
  const [showCreatePage, setShowCreatePage] = useState(false);
  const [showViewPage, setShowViewPage] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [imagenPreview, setImagenPreview] = useState(null);
  const [nuevaImagen, setNuevaImagen] = useState(null);

  const [cursos, setCursos] = useState([
    {
      id: 1,
      imagen: 'https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg',
      titulo: 'Estrategias Didácticas',
      descripcion: 'Curso completo sobre metodologías y estrategias didácticas modernas para la educación superior.',
      profesor: 'José Valdez',
      precio: 'S/ 500',
      duracion: '120h',
      certificado: 'Si',
    },
    {
      id: 2,
      imagen: 'https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg',
      titulo: 'Estrategias Didácticas',
      descripcion: 'Curso completo sobre metodologías y estrategias didácticas modernas para la educación superior.',
      profesor: 'José Valdez',
      precio: 'S/ 500',
      duracion: '120h',
      certificado: 'Si',
    },
    {
      id: 3,
      imagen: 'https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg',
      titulo: 'Estrategias Didácticas',
      descripcion: 'Curso completo sobre metodologías y estrategias didácticas modernas para la educación superior.',
      profesor: 'José Valdez',
      precio: 'S/ 500',
      duracion: '120h',
      certificado: 'Si',
    },
  ]);

  // Funciones para mostrar/ocultar páginas
  const toggleCreatePage = () => setShowCreatePage(!showCreatePage);
  const toggleViewPage = (curso = null) => {
    setCurrentCourse(curso ? {...curso} : null);
    setShowViewPage(!showViewPage);
    setEditMode(false);
    setNuevaImagen(null);
  };

  // Estado para nuevo curso
  const [nuevoCurso, setNuevoCurso] = useState({
    titulo: '',
    profesor: '',
    precio: '',
    duracion: '',
    certificado: 'Si',
  });

  // Manejar subida de imagen para creación
  const handleSubirFoto = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png') && file.size <= 5 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagenPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, selecciona una imagen JPG o PNG menor a 5MB.');
    }
  };

  // Manejar subida de imagen para edición
  const handleCambiarImagen = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png') && file.size <= 5 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = () => {
        setNuevaImagen(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, selecciona una imagen JPG o PNG menor a 5MB.');
    }
  };

  // Crear nuevo curso
  const guardarCurso = () => {
    const nuevoId = cursos.length > 0 ? Math.max(...cursos.map(c => c.id)) + 1 : 1;
    const cursoAgregar = {
      id: nuevoId,
      imagen: imagenPreview || 'https://via.placeholder.com/350x150',
      descripcion: nuevoCurso.descripcion || 'Descripción del curso',
      ...nuevoCurso,
      precio: `S/ ${nuevoCurso.precio}`,
      duracion: `${nuevoCurso.duracion}h`,
      certificado: nuevoCurso.certificado ? 'Si' : 'No'
    };
    setCursos([...cursos, cursoAgregar]);
    resetForm();
    setShowCreatePage(false);
  };

  // Actualizar curso existente (incluyendo imagen)
  const actualizarCurso = () => {
    const cursosActualizados = cursos.map(curso => 
      curso.id === currentCourse.id ? { 
        ...currentCourse,
        imagen: nuevaImagen || currentCourse.imagen,
        precio: currentCourse.precio.includes('S/') ? currentCourse.precio : `S/ ${currentCourse.precio}`,
        duracion: currentCourse.duracion.includes('h') ? currentCourse.duracion : `${currentCourse.duracion}h`
      } : curso
    );
    setCursos(cursosActualizados);
    setEditMode(false);
    toggleViewPage(null);
  };

  // Manejar cambios en formulario de creación
  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    setNuevoCurso({
      ...nuevoCurso,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Manejar cambios en formulario de edición
  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentCourse({
      ...currentCourse,
      [name]: type === 'checkbox' ? (checked ? 'Si' : 'No') : value
    });
  };

  // Resetear formulario de creación
  const resetForm = () => {
    setNuevoCurso({
      titulo: '',
      profesor: '',
      precio: '',
      duracion: '',
      certificado: 'Si',
    });
    setImagenPreview(null);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {!showCreatePage && !showViewPage ? (
        <>
          <h1 className="text-3xl font-bold mb-4 text-green-600">Cursos</h1>

          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <div className="flex items-center bg-white border rounded px-3 py-2 w-64 shadow-sm">
              <FaSearch className="text-gray-400 mr-2 text-sm" />
              <input
                type="text"
                placeholder="Buscar curso..."
                className="outline-none w-full text-sm"
              />
            </div>
            <button
              onClick={toggleCreatePage}
              className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
            >
              <FaPlus className="mr-2" /> Crear Nuevo Curso
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursos.map((curso) => (
              <div
                key={curso.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col"
              >
                <img
                  src={curso.imagen}
                  alt="Curso"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold mb-2">{curso.titulo}</h2>
                    <p className="text-sm text-gray-700 mb-2">{curso.descripcion}</p>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="font-semibold">Profesor:</span>
                        <span>{curso.profesor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Precio:</span>
                        <span>{curso.precio}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Duración:</span>
                        <span>{curso.duracion}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Certificado:</span>
                        <span>{curso.certificado}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <button 
                      onClick={() => toggleViewPage(curso)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaEye className="mr-2" /> Ver
                    </button>
                    <button 
                      onClick={() => {
                        toggleViewPage(curso);
                        setEditMode(true);
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm flex items-center"
                    >
                      <FaEdit className="mr-2" /> Editar
                    </button>
                    <button className="bg-gray-600 hover:bg-gray-700 p-2 rounded w-8 h-8 flex items-center justify-center">
                      <FaEllipsisV className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : showCreatePage ? (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-start overflow-y-auto z-50 p-4">
          <div className="relative w-full max-w-4xl space-y-6">
            <h1 className="text-2xl font-bold text-green-600">Crear Curso</h1>
            
            <div className="bg-white rounded-lg shadow-xl p-8 w-full">
              <button
                onClick={toggleCreatePage}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-xl" />
              </button>

              <h2 className="text-lg font-semibold mb-6">Imagen del curso</h2>

              <div className="flex items-start gap-6">
                <div className="w-40 h-40 rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-100 flex-shrink-0">
                  {imagenPreview ? (
                    <img
                      src={imagenPreview}
                      alt="Vista previa"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm">Sin imagen</span>
                  )}
                </div>

                <div className="flex flex-col justify-between h-full pt-6">
                  <label>
                    <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer transition-colors w-max mt-4">
                      Subir foto
                      <input
                        type="file"
                        accept="image/jpeg, image/png"
                        className="hidden"
                        onChange={handleSubirFoto}
                      />
                    </div>
                  </label>
                  <p className="text-xs text-gray-500 mt-4">JPG o PNG. Máximo 5 MB.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8 w-full">
              <h2 className="text-lg font-semibold mb-6">Información del curso</h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Título *</label>
                  <input
                    type="text"
                    name="titulo"
                    value={nuevoCurso.titulo}
                    onChange={manejarCambio}
                    placeholder="Ej: Estrategias Didácticas..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Descripción *</label>
                  <textarea
                    name="descripcion"
                    value={nuevoCurso.descripcion}
                    onChange={manejarCambio}
                    placeholder="Describe el contenido y objetivos del curso..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profesor Asignado *</label>
                    <select
                      name="profesor"
                      value={nuevoCurso.profesor}
                      onChange={manejarCambio}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Seleccionar un profesor</option>
                      <option value="José Valdez">José Valdez</option>
                      <option value="María Pérez">María Pérez</option>
                      <option value="Carlos Gómez">Carlos Gómez</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Precio (S/) *</label>
                    <input
                      type="number"
                      name="precio"
                      value={nuevoCurso.precio}
                      onChange={manejarCambio}
                      placeholder="500"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duración (horas) *</label>
                    <input
                      type="number"
                      name="duracion"
                      value={nuevoCurso.duracion}
                      onChange={manejarCambio}
                      placeholder="Ej: 120"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="certificado"
                    checked={nuevoCurso.certificado === 'Si'}
                    onChange={manejarCambio}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-700">
                    Este curso incluye certificado de finalización
                  </label>
                </div>
                <p className="text-xs text-gray-500 ml-7">
                  Los estudiantes que completen el curso recibirán un certificado digital
                </p>
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={toggleCreatePage}
                  className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={guardarCurso}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Guardar Curso
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-start overflow-y-auto z-50 p-4">
          <div className="relative w-full max-w-4xl space-y-6">
            <h1 className="text-2xl font-bold text-green-600">
              {editMode ? 'Editar Curso' : 'Detalles del Curso'}
            </h1>
            
            <div className="bg-white rounded-lg shadow-xl p-8 w-full">
              <button
                onClick={() => toggleViewPage(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-xl" />
              </button>

              <h2 className="text-lg font-semibold mb-6">Imagen del curso</h2>

              <div className="flex flex-col items-center">
                <div className="w-60 h-60 rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-50 mb-4">
                  <img
                    src={nuevaImagen || currentCourse?.imagen}
                    alt="Curso"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {editMode && (
                  <>
                    <label className="mb-2">
                      <div className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full cursor-pointer">
                        Cambiar imagen
                        <input
                          type="file"
                          accept="image/jpeg, image/png"
                          className="hidden"
                          onChange={handleCambiarImagen}
                        />
                      </div>
                    </label>
                    <p className="text-xs text-gray-500">JPG o PNG. Máximo 5 MB.</p>
                  </>
                )}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8 w-full">
              <h2 className="text-lg font-semibold mb-6">Información Basica</h2>
              
              <div className="space-y-5">
                {editMode ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título *</label>
                      <input
                        type="text"
                        name="titulo"
                        value={currentCourse?.titulo || ''}
                        onChange={handleEditChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descripción *</label>
                      <textarea
                        name="descripcion"
                        value={currentCourse?.descripcion || ''}
                        onChange={handleEditChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Profesor *</label>
                        <select
                          name="profesor"
                          value={currentCourse?.profesor || ''}
                          onChange={handleEditChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Seleccionar profesor</option>
                          <option value="José Valdez">José Valdez</option>
                          <option value="María Pérez">María Pérez</option>
                          <option value="Carlos Gómez">Carlos Gómez</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Precio (S/) *</label>
                        <input
                          type="number"
                          name="precio"
                          value={currentCourse?.precio?.replace('S/ ', '') || ''}
                          onChange={handleEditChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Duración (horas) *</label>
                        <input
                          type="number"
                          name="duracion"
                          value={currentCourse?.duracion?.replace('h', '') || ''}
                          onChange={handleEditChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="certificado"
                        checked={currentCourse?.certificado === 'Si'}
                        onChange={handleEditChange}
                        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label className="ml-2 text-sm font-medium text-gray-700">
                        Este curso incluye certificado de finalización
                      </label>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-1">Título</h3>
                      <p className="p-3 bg-gray-50 rounded-lg">{currentCourse?.titulo}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-1">Descripción</h3>
                      <p className="p-3 bg-gray-50 rounded-lg whitespace-pre-line">{currentCourse?.descripcion}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Profesor</h3>
                        <p className="p-3 bg-gray-50 rounded-lg">{currentCourse?.profesor}</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Precio</h3>
                        <p className="p-3 bg-gray-50 rounded-lg">{currentCourse?.precio}</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Duración</h3>
                        <p className="p-3 bg-gray-50 rounded-lg">{currentCourse?.duracion}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-1">Certificado</h3>
                      <p className="p-3 bg-gray-50 rounded-lg">{currentCourse?.certificado}</p>
                    </div>
                  </>
                )}

                <p className="text-xs text-gray-500 ml-7">
                  Los estudiantes que completen el curso recibirán un certificado digital
                </p>
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={() => toggleViewPage(null)}
                  className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg transition-colors"
                >
                  {editMode ? 'Cancelar' : 'Volver'}
                </button>
                {editMode ? (
                  <button
                    onClick={actualizarCurso}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center"
                  >
                    <FaSave className="mr-2" /> Guardar Cambios
                  </button>
                ) : (
                  <button
                    onClick={() => setEditMode(true)}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center"
                  >
                    <FaEdit className="mr-2" /> Editar Curso
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}