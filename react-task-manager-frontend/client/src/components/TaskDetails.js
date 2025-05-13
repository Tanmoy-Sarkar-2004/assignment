import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTask } from '../redux/actions';

function TaskDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { task } = useSelector(state => state);

  useEffect(() => {
    dispatch(getTask(id));
  }, [dispatch, id]);

  return (
    <div>
      <h3>Task Details</h3>
      {task ? <p>{task.title}</p> : <p>Loading...</p>}
    </div>
  );
}

export default TaskDetails;