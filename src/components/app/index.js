import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducers from '../../reducers';

import HomePage from '../../pages/home';
import HistoryPage from '../../pages/history';
import NotFound from '../../pages/notfound';

import * as routes from '../../constants/routes';
import { IS_PRODUCTION } from '../../constants/config';

const store = IS_PRODUCTION ?
  createStore(reducers, applyMiddleware(thunk))
  :
  // createStore(reducers, applyMiddleware(thunk, logger));
  createStore(reducers, applyMiddleware(thunk, logger, reduxImmutableStateInvariant()));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.history} component={HistoryPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
