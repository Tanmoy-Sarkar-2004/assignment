import React from 'react';
import TaskForm from '../components/TaskForm';

function AddTask() {
  return (
    <div className="container mt-5">
      <h2>Add a New Task</h2>
      <TaskForm />
    </div>
  );
}

export default AddTask;