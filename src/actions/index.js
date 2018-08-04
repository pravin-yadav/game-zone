import axios from 'axios';
export const SET_GAMES = 'SET_GAMES';

export function setGames(games) {
  return {
    type: SET_GAMES,
    games
  };
}
export function fetchGames() {
  return dispatch => {
    axios
      .get('/api/games')
      .then(data => dispatch(setGames(data.data.games)))
      .catch(error => {
        throw error;
      });
  };
}
