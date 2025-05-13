import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList';

function Home() {
  return (
    <div className="container mt-5">
      <h1>Task Manager</h1>
      <Link className="btn btn-success mb-3" to="/add">Add Task</Link>
      <TaskList />
    </div>
  );
}

export default Home;