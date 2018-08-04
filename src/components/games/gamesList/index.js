import React from 'react';
import { PropTypes } from 'prop-types';

export default function GamesList({ games }) {
  const emptyMessage = <p>You don't have games in your list</p>;
  const gameList = (
    <p>Hurray, you got some game in your collection.. Let's Play</p>
  );

  return <div>{games.length === 0 ? emptyMessage : gameList}</div>;
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired
};
