const initialState = {
  tasks: [],
  task: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TASKS':
      return { ...state, tasks: action.payload };
    case 'GET_TASK':
      return { ...state, task: action.payload };
    default:
      return state;
  }
}