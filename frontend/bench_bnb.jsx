import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const initialState = { session: { currentUser: window.currentUser } };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store}/>, document.getElementById("root"));
});
