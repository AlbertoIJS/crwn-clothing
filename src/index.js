import React from 'react';
import ReactDOM from 'react-dom';
// React Router
import { BrowserRouter } from 'react-router-dom';

// Redux and store
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
