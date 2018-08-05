import React from 'react';
import PropTypes from 'prop-types';
import TodoData from './todoData';

const TodoList = props => {
  return (
    <div style={{ margin: '20px auto', width: '60%', padding: '20px' }}>
      <TodoData removeTodo={props.removeTodo} todos={props.todos} />
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoList;
