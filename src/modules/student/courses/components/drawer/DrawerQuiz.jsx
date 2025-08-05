import React from 'react';
import { Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';

const DrawerQuiz = ({ open, onClose, item }) => {
  const navigate = useNavigate();
  
  const handleIntent = () => {
    navigate(`/quiz`); // Assuming item has an id for the quiz
  }


  return (
    <Drawer
      open={open}
      width={350}
      onClose={onClose}
      title={item.title || 'Quiz'}
      footer={
        <div className="flex justify-end p-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={handleIntent}
          >
            Iniciar Intento
          </button>
        </div>
      }
    >
      {/* render quiz details using item */}
      <div className='flex flex-col gap-5'>
        <div>
          <h3 className='text-xl font-semibold text-gray-500'>Descripcion</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a, eius ut nobis error officiis deleniti odit autem 
            excepturi exercitationem incidunt dolore aspernatur quo quisquam dolorem, dolorum officia alias dolor. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Quo, dolorem. Illum consequatur non ut? Cum esse illum maxime! Cum doloribus asperiores dolorum modi aut eveniet eos reprehenderit similique, rerum dolorem!
          </p>
        </div>
        <div>
          <h3 className='text-xl font-semibold text-gray-500'>Fecha Limite</h3>
          <p>12/07/2025</p>
        </div>
        <div>
          <h3 className='text-xl font-semibold text-gray-500'>Limite de Tiempo</h3>
          <p>30 minutos</p>
        </div>
        <div>
          <h3 className='text-xl font-semibold text-gray-500'>Intentos</h3>
          <p>3 Intentos restantes</p>
        </div>
        <div>
          <h3 className='text-xl font-semibold text-gray-500'>Calificación</h3>
          <div className='flex flex-row justify-between items-center'>
            <p>Sin intentos</p>
            <button className='rounded-full px-7 py-2 bg-gray-300'>0/20</button>
          </div>

        </div>
      </div>
    </Drawer>
  );
}

export default DrawerQuiz;