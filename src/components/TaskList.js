import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

function TaskList() {
  const tasks = useSelector(state => state.todos);

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;