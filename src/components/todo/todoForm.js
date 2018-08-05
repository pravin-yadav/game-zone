import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todo';

class TodoForm extends React.Component {
  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text) {
      const { text } = this.state;
      this.props.addTodo(text);
      this.setState({ text: '' });
    } else {
      return alert("Input can't be blank");
    }
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="ui form"
        style={{
          display: 'flex',
          width: '60%',
          margin: '0 auto'
        }}
      >
        <input
          type="text"
          name="text"
          onChange={this.handleChange}
          value={this.state.text}
          className="field"
          placeholder="Please enter to add to your task..."
          style={{ margin: '0 20px' }}
          autoComplete="off"
        />
        <button type="submit" className="ui primary button">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);
