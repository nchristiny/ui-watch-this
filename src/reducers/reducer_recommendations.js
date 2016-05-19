import { FETCH_RECOMMENDATIONS, FETCH_RECOMMENDATION } from '../actions/index';

const INITIAL_STATE = { all: [], recommendation: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_RECOMMENDATIONS:
    return { ...state, all: action.payload.data };
  case FETCH_RECOMMENDATION:
    return { ...state, recommendation: action.payload.data };
  default:
    return state;
  }
}
