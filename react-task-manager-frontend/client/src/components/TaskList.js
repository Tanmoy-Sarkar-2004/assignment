import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, deleteTask } from '../redux/actions';
import { Link } from 'react-router-dom';

function TaskList() {
  const { tasks } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
          <Link to={`/task/${task._id}`}>{task.title}</Link>
          <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteTask(task._id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;