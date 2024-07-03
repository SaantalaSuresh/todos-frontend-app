import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/todoSlice';
import Modal from 'react-modal';
import '../styles/TaskItem.css';

Modal.setAppElement('#root');

function TaskItem({ task }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, text: editedTask }));
    setIsModalOpen(false);
  };

  return (
    <div className="task-item">
      <span className='todo-title' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <div>
        <button className="toggle-btn" onClick={handleToggle} style={{ backgroundColor: task.completed ? '#4CAF50' : '#ffc107' }}>{task.completed? "Completed": "Progress"}</button>
        <button className="edit-btn" onClick={() => setIsModalOpen(true)}>Edit</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Edit Task</h2>
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
        <button onClick={handleEdit}>Save</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
}

export default TaskItem;