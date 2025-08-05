import  { useState } from 'react'
import ContentTab from '../components/content-tab/ContentTab.jsx';
import CalificationTab from '../components/grades-tab/CalificationTab.jsx';
import ForumTab from '../components/forum-tab/ForumTab';

const CourseDetailPage = () => {
  const [activeTab, setActiveTab] = useState('content');
  
  // Configuración de pestañas
  const tabs = [
    { id: 'content', label: 'Contenido', component: <ContentTab /> },
    { id: 'calification', label: 'Calificaciones', component: <CalificationTab/> },
    { id: 'forum', label: 'Foro', component: <ForumTab /> },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto p-2 lg:p-4">
        <h1 className="text-2xl font-bold mb-4">Maching Learning Introduction</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div >
            <img
              src="https://imgs.search.brave.com/akrwzD-Z9bZdVQS0l1dADwCqHEptFCpdYvCGbp8PWww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MzM3Mjg1Ny9lcy9m/b3RvL3ByZXNlbnRh/Y2klQzMlQjNuLWUt/aW5mb2dyYWYlQzMl/QURhLWRlLWxvcy1z/ZXJ2aWNpb3MtZGUt/YXByZW5kaXphamUt/ZW4tbCVDMyVBRG5l/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Rl9Ub3RXYkNk/OEttRmxTYlNPWGdC/UTMzcUxrRVVRLV9r/ZEswWWVkRldfdz0"
              alt="Curso de Programación"
              className="w-full h-64 object-cover"
            />
          </div>
          
          {/* Navegación de pestañas */}
          <div className="border-b border-gray-200 px-6">
            <nav className="flex space-x-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`py-4 px-1 font-medium text-sm relative transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Contenido */}
          <div className="p-6 min-h-[400px]">
            {tabs.find(tab => tab.id === activeTab).component}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;