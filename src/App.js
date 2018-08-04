import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/index.js';
import Games from './components/games/index.js';
import Navbar from './components/navbar/index.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container app">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={Games} />
        </div>
      </Router>
    );
  }
}

export default App;
