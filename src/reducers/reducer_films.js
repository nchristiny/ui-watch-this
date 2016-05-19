import { FETCH_FILMS, FETCH_FILM } from '../actions/index';

const INITIAL_STATE = { all: [], film: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_FILMS:
    return { ...state, all: action.payload.data };
  case FETCH_FILM:
    return { ...state, film: action.payload.data };
  default:
    return state;
  }
}
