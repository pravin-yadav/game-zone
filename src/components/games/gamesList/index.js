import React from 'react';
import { PropTypes } from 'prop-types';
import GameCard from '../gamecard/index';

export default function GamesList({ games }) {
  const emptyMessage = <p>You don't have games in your list</p>;
  const gameList = (
    <div className="ui four cards">
      {games.map(game => <GameCard game={game} key={game._id} />)}
    </div>
  );

  return <div>{games.length === 0 ? emptyMessage : gameList}</div>;
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired
};
