import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import Modal from 'react-modal';
import './App.css';

// Set the app element for react-modal
Modal.setAppElement('#root');

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="App">
        <h1>React Todo App</h1>
        <button onClick={openModal}>Add New Task</button>
        <TaskList />

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Add Task Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <h2>Add New Task</h2>
          <TaskInput closeModal={closeModal} />
        </Modal>
      </div>
    </Router>
  );
}

export default App;