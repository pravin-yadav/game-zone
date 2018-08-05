import React from 'react';
import PropTypes from 'prop-types';

class TodoData extends React.Component {
  handleDelete(id) {
    this.props.removeTodo(id);
  }
  render() {
    const { todos } = this.props;
    return (
      <div>
      {todos.length === 0 ? null : <div style={{ border: '1px solid #ccc'}}>
        {todos.map(todo => {
          return (
            <div key={todo.id} style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center', padding: '5px 20px' }}>
              <div
                key={todo.id}
                style={{ display: 'inline-block', overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap' }}
              >
                {todo.text}
              </div>
              <div>
                <div role="button" tabIndex={0} onClick={this.handleDelete.bind(this, todo.id)} style={{outline: 0}}>
                <img src={require('../../assets/delete.png')} alt="remove" width="25px" height="25px" style={{cursor: 'pointer'}}/>
                </div>
              </div>
            </div>
          );
        })}
      </div>}
      </div>
    );
  }
}

TodoData.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoData;
