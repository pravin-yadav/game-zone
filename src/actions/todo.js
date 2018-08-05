export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});
