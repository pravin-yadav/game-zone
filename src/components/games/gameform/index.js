import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveGame } from '../../../actions/index';
class GameForm extends React.PureComponent {
  state = {
    title: '',
    cover: '',
    errors: {},
    loading: false,
    done: false
  };

  handleChange = e => {
    let errors = Object.assign({}, this.state.errors);
    delete errors[e.target.name];
    this.setState({ [e.target.name]: e.target.value, errors });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Validation
    let errors = {};
    if (this.state.title === '') errors.title = "Title Can't be empty";
    if (this.state.cover === '') errors.cover = "Cover Can't be empty";
    this.setState({ errors: errors });

    // to check if the form is Valid
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      const { title, cover } = this.state;
      this.setState({ loading: true });
      this.props.saveGame({ title, cover }).then(this.setState({ done: true }));
    }
  };
  render() {
    const form = (
      <form
        className={classnames('ui', 'form', { loading: this.state.loading })}
        onSubmit={this.handleSubmit}
      >
        <h1>Add new game</h1>
        {!!this.state.errors.global && (
          <div className="ui negative message">
            <p>{this.state.errors.global}</p>
          </div>
        )}
        <div
          className={classnames('field', { error: !!this.state.errors.title })}
        >
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <span>{this.state.errors.title}</span>
        </div>

        <div
          className={classnames('field', { error: !!this.state.errors.cover })}
        >
          <label htmlFor="cover">Cover URL</label>
          <input
            id="cover"
            name="cover"
            value={this.state.cover}
            onChange={this.handleChange}
          />
          <span>{this.state.errors.cover}</span>
        </div>
        {this.state.cover && (
          <div className="field">
            <img
              src={this.state.cover}
              alt="cover"
              className="ui small bordered image"
            />
          </div>
        )}
        <div className="field">
          <button type="submit" className="ui primary button">
            Add Game
          </button>
        </div>
      </form>
    );
    return <div>{this.state.done ? <Redirect to="/games" /> : form}</div>;
  }
}

export default connect(
  null,
  { saveGame }
)(GameForm);
