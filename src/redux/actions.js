export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';


export const addTask = (text) => ({
  type: ADD_TASK,
  payload: {
    id: Math.random().toString(36).substr(2, 9),
    text
  }
});


export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});


export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
});
