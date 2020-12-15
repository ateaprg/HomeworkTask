import React from 'react';
import App from './App';
import * as ReactDOM from 'react-dom';

test('renders without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(<App/>, root);
  ReactDOM.unmountComponentAtNode(root);
});