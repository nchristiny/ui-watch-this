import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomeIndex from './components/home_index';
import RecommendationsIndex from './components/recommendations_index';
import RecommendationsShow from './components/recommendations_show';
import RecommendationsNew from './components/recommendations_new';
import FilmsIndex from './components/films_index';
import FilmsShow from './components/films_show';
import NoMatch from './components/NoMatch'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeIndex} />
    <Route path ="recommendations" component={RecommendationsIndex} />
    <Route path="recommendations/new" component={RecommendationsNew} />
    <Route path="recommendations/:id" component={RecommendationsShow} />
    <Route path="films" component={FilmsIndex} />
    <Route path="films/:id" component={FilmsShow} />
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
);
