// src/modules/student/pending-tasks/components/TaskCard.jsx
import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';


const TaskCard = ({ task }) => {
  return (
    
    <div className="bg-white rounded-lg shadow p-6 flex justify-between items-start">
      <div className="flex items-start space-x-4">
        <FileText className="w-8 h-8 text-blue-600" /
        >
          
        <div>
          
          <h2 className="text-lg font-semibold">{task.title}</h2>
          <p className="text-sm">
            <span className="font-semibold">Curso:</span> {task.course}
          </p>
          <p className="text-sm text-gray-600">{task.description}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500">Vence: {task.dueDate}</p>
        <Link to={`/pending-tasks/${task.id}`}>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
            Ver detalles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;