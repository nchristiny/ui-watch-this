import { combineReducers } from 'redux';
import RecommendationsReducer from './reducer_recommendations';
import FilmsReducer from './reducer_films';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  films: FilmsReducer,
  recommendations: RecommendationsReducer,
  form: formReducer
});

export default rootReducer;
