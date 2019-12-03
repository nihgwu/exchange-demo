import React from 'react';
import ReactDOM from 'react-dom';
import MutationObserver from 'mutation-observer';

import App from './App';

global.MutationObserver = MutationObserver;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
