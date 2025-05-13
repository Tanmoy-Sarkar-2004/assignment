import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddTask />} />
      <Route path="/task/:id" element={<TaskPage />} />
    </Routes>
  );
}

export default App;