import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer); //const store is the prop that we pass down to our connect components // store is a property of Provider and dispatch is a method of store.

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
