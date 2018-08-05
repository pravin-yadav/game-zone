import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoForm from './todoForm';
import TodoList from './todoList';
import { removeTodo } from '../../actions/todo';

const Todo = props => {
  return (
    <div>
      <TodoForm />
      <TodoList todos={props.todos} removeTodo={props.removeTodo} />
    </div>
  );
};

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired
};
const todoSelector = state => {
  const { todos } = state;
  return {
    todos,
    removeTodo
  };
};
export default connect(
  todoSelector,
  { removeTodo }
)(Todo);
