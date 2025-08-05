import React from 'react';
import TaskCard from '../components/TaskCard';
import usePendingTasks from '../hooks/usePendingTasks';

const PendingTasksPage = () => {
  const tasks = usePendingTasks();

  return (
    <div className="space-y-4 bg-gray-100 min-h-screen p-6">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default PendingTasksPage;