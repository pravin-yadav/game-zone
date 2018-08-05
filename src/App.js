import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/index.js';
import Games from './components/games/index.js';
import GameForm from './components/games/gameform/index';
import Navbar from './components/navbar/index.js';
import Todo from './components/todo/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/games/new" component={GameForm} />
          <Route exact path="/todo" component={Todo} />
        </div>
      </Router>
    );
  }
}

export default App;
