import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container/Homepage';
import Welcome from './components/Welcome';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
