import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import GamesList from './gamesList/index';
import { fetchGames } from '../../actions/index';

class Games extends React.PureComponent {
  componentDidMount() {
    this.props.fetchGames();
  }
  render() {
    return (
      <div>
        <h1>Feel the real games!!!</h1>
        <GamesList games={this.props.games} />
      </div>
    );
  }
}

Games.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired
};

function selectors(state) {
  return {
    games: state.games
  };
}

export default connect(
  selectors,
  { fetchGames }
)(Games);
