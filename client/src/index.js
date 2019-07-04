import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV === 'development') {
  const a11y = require('react-a11y').default;
  a11y(React, ReactDOM, {
    rules: {
      'img-uses-alt': 'warn',
      'img-redundant-alt': ['warn', ['image', 'photo', 'foto', 'bild']],
    },
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
