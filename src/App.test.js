import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import App from './App';

const store = configureStore();

const RootElement = (
  <Provider store={store}>
    <App />
  </Provider>
);


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(RootElement, div);
});
