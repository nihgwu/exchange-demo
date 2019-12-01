import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import theme, { GlobalStyle } from 'utils/theme';
import store from 'store';

import Router from './Router';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </Provider>
);

export default App;
