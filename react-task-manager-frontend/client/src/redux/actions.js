import axios from 'axios';

export const getTasks = () => async (dispatch) => {
  const res = await axios.get('http://localhost:5000/api/tasks');
  dispatch({ type: 'GET_TASKS', payload: res.data });
};

export const getTask = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/tasks/${id}`);
  dispatch({ type: 'GET_TASK', payload: res.data });
};

export const addTask = (task) => async () => {
  await axios.post('http://localhost:5000/api/tasks', task);
};

export const deleteTask = (id) => async () => {
  await axios.delete(`http://localhost:5000/api/tasks/${id}`);
};