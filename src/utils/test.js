import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'store';
import theme from 'utils/theme';

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const StoreWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

const renderWithTheme = (ui, options) =>
  render(ui, { wrapper: ThemeWrapper, ...options });

const renderWithStore = (ui, options) =>
  render(ui, { wrapper: StoreWrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithTheme as render, renderWithStore };
