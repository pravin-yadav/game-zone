import axios from 'axios';
export const SET_GAMES = 'SET_GAMES';
export const ADD_GAME = 'ADD_GAME';

export function setGames(games) {
  return {
    type: SET_GAMES,
    games
  };
}

export function addGame(game) {
  return {
    type: ADD_GAME,
    game
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

export function saveGame(game) {
  return dispatch => {
    axios
      .post('/api/games', {
        data: game,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(data => dispatch(addGame(data.data.game)))
      .catch(error => {
        throw error;
      });
  };
}
