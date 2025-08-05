import React from 'react';
import { Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';

const DrawerTask = ({ open, onClose, item }) => {
  const navigate = useNavigate();

  return (
  <Drawer
    open={open}
    width={350}
    onClose={onClose}
    title={item.title || 'Task'}
    footer={
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={() => navigate('/courses/detail/task')} 
        >
          Submit
        </button>
      </div>
    }
  >
    {/* render task details using item */}
    <h1>{item.title}</h1>
  </Drawer>
  );
};

export default DrawerTask;