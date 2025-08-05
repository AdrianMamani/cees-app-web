import React from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const forums = [
  {
    id: 1,
    title: 'Foro de Introducción a la Programación',
    description: 'Discute temas relacionados con la introducción a la programación.',
    createdAt: '2023-09-01',
  },
  {
    id: 2,
    title: 'Foro de Desarrollo Web',
    description: 'Comparte tus experiencias y preguntas sobre desarrollo web.',
    createdAt: '2023-10-01',
  },
  {
    id: 3,
    title: 'Foro de Inteligencia Artificial',
    description: 'Debate sobre las últimas tendencias en inteligencia artificial.',
    createdAt: '2023-11-01',
  },
]

const ForumTab = () => {

  const navigate = useNavigate();
  
  const handleForumClick = () => {
    navigate(`/courses/detail/forum`);
  }


  return (
    <div className=' w-full '>
      <h1 className='text-xl font-semibold text-gray-600 '>Foro</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {forums.map((forum) => (
          <div key={forum.id} className='flex gap-5 cursor-pointer bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'
            onClick={handleForumClick}>
            <LuMessagesSquare className='w-10 h-10 text-blue-500 mb-2' />
            <div>  
              <h2 className='text-lg font-bold text-gray-800'>{forum.title}</h2>
              <p className='text-gray-600'>{forum.description}</p>
              <p className='text-sm text-gray-500'>Creado el: {new Date(forum.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForumTab