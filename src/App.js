import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyle from './GlobalStyle';
import Router from './containers/Router';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router />
  </Provider>
);

export default App;
